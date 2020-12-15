const express = require("express");
const router = express.Router();
const connexion = require("../data/mysql"); 

router.get("/architectures", (req, res) => {
    connexion.query("SELECT * FROM architectures", (err, result) => {
        if(err){
            res.status(500).send("Erreur lors de la récupération de la liste des images des villes")
        } else {
            res.json(result); 
        }
    })
});


module.exports = router;