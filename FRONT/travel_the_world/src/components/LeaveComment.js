import React, {useState} from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";




const LeaveComments = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [sent, setSent] = useState("");

    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleComment = (event) => {
        setContent(event.target.value)
    }

    const formSubmit = (event) => {
        event.preventDefault();
        let data = {
            name: name,
            content: content

        }
        axios.post("http://localhost:3001/galery/comments", data)
            .then(response => {
                console.log("my data", response)
                setSent(response.data);
                setName("");
                setContent("");
                alert("Votre message a été envoyé avec succé !")

            }).catch(() => {
                console.log("message not sent")
            })

    }


    return (
        <div>
            <Button onClick={() => history.push("/")} variant="contained" color="secondary" size="small" style={{ marginBottom: "10px" }}>Retour à l'accueil</Button>
            <Button onClick={() => history.push("/allComments")} variant="contained" color="secondary" size="small" style={{ marginBottom: "10px" }}>Voir les commentaires</Button>
            <form onSubmit={formSubmit} className="form-comment">
                <label htmlFor="name">Nom </label><br/>
                <input type="text" id="name" placeholder="Votre nom" value={name} onChange={handleName} /><br />
                <label htmlFor="comment">Commentaire </label><br/>
                <textarea type="text" id="comment" placeholder="Ajouter un commentaire" rows="7" cols="40" value={content} onChange={handleComment}/><br/>
                <Button variant="outlined" color="primary" size="small" type="submit">Envoyer</Button>
            </form>
        </div>
    )
}

export default LeaveComments; 