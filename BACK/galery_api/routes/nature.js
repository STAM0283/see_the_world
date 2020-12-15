const express = require("express");
const router = express.Router();
const connexion = require("../data/mysql"); 

router.get("/natures", (req, res) => {
    connexion.query("SELECT * FROM natures", (err, result) => {
        if(err){
            res.status(500).send("Erreur lors de la récupération de la liste des images de natures")
        } else {
            res.json(result); 
        }
    })
});


module.exports = router;