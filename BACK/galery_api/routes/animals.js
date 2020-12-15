const express = require("express");
const router = express.Router();
const connexion = require("../data/mysql"); 



router.get("/animals", (req, res) => {
    connexion.query("SELECT * FROM animals", (err, result) => {
        if(err){
            res.status(500).send("Erreur lors de la récupération de la liste des images des annimaux")
        } else {
            res.json(result); 
        }
    })
});


module.exports = router;