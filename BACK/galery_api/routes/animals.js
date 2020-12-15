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

router.post("/animals", (req, res, next) => {

    const dataForm = req.body;

    connexion.query("INSERT INTO animals SET ?", dataForm, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de la sauvegarde du portrait annimal");
        } else {
            res.sendStatus(200);
        }
    })
});

router.delete("/animals", (req, res) => {

    const dataForm = req.body.id;

    connexion.query("DELETE FROM animals WHERE id = ?", dataForm, (err, results) => {
        if (err) {
            res.status(500).send("Erreur lors de la supression d'un portrait");
        } else {
            res.sendStatus(200);
        }
    })
})


module.exports = router;