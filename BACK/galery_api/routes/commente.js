const express = require("express");
const router = express.Router();
const connexion = require("../data/mysql"); 


router.post("/comments", (req, res, next) => {

    const dataForm = req.body;

    connexion.query("INSERT INTO comments SET ?", dataForm, (err, results) => {
        if (err) {
            res.status(500).send("Erreur lors de la sauvegarde du commentaire");
        } else {
            res.sendStatus(200);
        }
    })
});

router.get("/comments", (req, res) => {
    connexion.query("SELECT * FROM comments", (err, result) => {
        if(err){
            res.status(500).send("Erreur lors de la récupération de la liste des commentaires")
        } else {
            res.json(result); 
        }
    })
});

module.exports = router;