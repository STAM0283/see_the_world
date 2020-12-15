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


router.post("/natures", (req, res, next) => {

    const dataForm = req.body;

    connexion.query("INSERT INTO natures SET ?", dataForm, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de la sauvegarde du portrait nature ");
        } else {
            res.sendStatus(200);
        }
    })
});

router.delete("/natures", (req, res) => {

    const dataForm = req.body;

    connexion.query("DELETE FROM natures WHERE id = ?", dataForm, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de la supression d'un portrait");
        } else {
            res.sendStatus(200);
        }
    })
})


module.exports = router;