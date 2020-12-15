import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const SpaceAdmin = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const signIn = () => {
        console.log("email", email);
        console.log(typeof(email));
        console.log(typeof(password))
        console.log("password", password)
        if(email=== process.env.REACT_APP_EMAIL && password === process.env.REACT_APP_PASSWORD){
            history.push("/interfaceAdmin");
        }
        else{
            alert("Votre Email ou votre mot de passe est erroné")
        }
    }

    return (
        <div>
            <form className="form-signIn">
                <h6>Espace Administrateur</h6>
                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" value={email} onChange={handleEmail}/><br />
                <label htmlFor="password" >Mot de passse</label><br />
                <input type="password" id="password" value={password} onChange={handlePassword}/><br />
                <Button variant="outlined" color="primary" size="small" style={{ marginTop: "10px" }} onClick={signIn}>Se Connecter</Button>

            </form>

        </div>
    )
}

export default SpaceAdmin;