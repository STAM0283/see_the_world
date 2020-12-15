import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";


const AllComments = () => {
    const history = useHistory(); 
    return (
        <div>
            <Button onClick={() => history.push("/")} variant="contained" color="secondary" size="small" style={{ marginBottom: "10px" }}>Retour à l'accueil</Button>
        </div>
    )
}

export default AllComments; 