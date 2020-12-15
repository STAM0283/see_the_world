import React, {useState} from "react";
import axios from "axios"; 
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const InterfaceAdmin = () => {

    const history = useHistory();
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [species, setSpecies] = useState("");
    const [speed, setSpeed] = useState("");
    const [size, setSize] = useState("");
    const [weight, setWeight] = useState("");
    const [image, setImage] = useState("");
    const [sent, setSent] = useState("");

    const [nameNature, setNameNature] = useState("");
    const [contentNature, setContentNature] = useState("");
    const [locationNature, setLocationNature] = useState("");
    const [imageNature, setImageNature] = useState(""); 

    const [nameCity, setNameCity] = useState("");
    const [contentCity, setContentCity] = useState("");
    const [locationCity, setLocationCity] = useState("");
    const [imageCity, setImageCity] = useState("");

    const [idAnimals, setIdAnimals] = useState("");
    const [idNatures, setIdNatures] = useState("");
    const [idCity, setIdCity] = useState("");

    const handleIdAnimals = (e) => {
        setIdAnimals(e.target.value)
    }
    const handleIdNatures = (e) => {
        setIdNatures(e.target.value)
    }
    const handleIdCity = (e) => {
        setIdCity(e.target.value)
    }


    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleNameNature = (e) => {
        setNameNature(e.target.value)
    }
    const handleNameCity = (e) => {
        setNameCity(e.target.value)
    }
    const handleContent = (e) => {
        setContent(e.target.value)
    }
    const handleContentNature = (e) => {
        setContentNature(e.target.value)
    }
    const handleContentCity = (e) => {
        setContentCity(e.target.value)
    }
    const handleSpecies = (e) => {
        setSpecies(e.target.value)
    }
    const handleSpeed = (e) => {
        setSpeed(e.target.value);
    }
    const handleSize = (e) => {
        setSize(e.target.value)
    }
    const handleWeight = (e) => {
        setWeight(e.target.value);
    }
    const handleImage = (e) => {
        setImage(e.target.value)
    }
    const handleImageNature = (e) => {
        setImageNature(e.target.value)
    }
    const handleImageCity = (e) => {
        setImageCity(e.target.value)
    }

    const handleLocationNature = (e) => {
        setLocationNature(e.target.value)
    }

    const handleLocationCity = (e) => {
        setLocationCity(e.target.value)
    }

  // add animals into the galery :

    const formSubmitAnimals = (event) => {
        event.preventDefault();
        let data = {
            name: name,
            content: content,
            species: species,
            speed: speed,
            size: size,
            weight: weight,
            image: image,
            

        }
        axios.post("http://localhost:3001/galery/animals", data)
            .then(response => {
                console.log("my data", response)
                setSent(response.data);
                setName("");
                setContent("");
                setSpecies("");
                setSpeed("");
                setSize("");
                setWeight("");
                setImage("");
                alert("Votre message a été envoyé avec succé !")

            }).catch(() => {
                console.log("message not sent")
            })

    }
    
    // Add nature into the galery : 
    const formSubmitNature = (event) => {
        event.preventDefault();
        let data = {
            name: nameNature,
            content: contentNature,
            location: locationNature,
            image: imageNature,
            

        }
        axios.post("http://localhost:3001/galery/natures", data)
            .then(response => {
                console.log("my data", response)
                setSent(response.data);
                setNameNature("");
                setLocationNature("");
                setImageNature("");
                alert("Votre message a été envoyé avec succé !")

            }).catch(() => {
                console.log("message not sent")
            })

    }
    //Add Architecture into the galery : 

    const formSubmitCity = (event) => {
        event.preventDefault();
        let data = {
            name: nameCity,
            content: contentCity,
            location: locationCity,
            image: imageCity,
            

        }
        axios.post("http://localhost:3001/galery/architectures", data)
            .then(response => {
                console.log("my data", response)
                setSent(response.data);
                setNameCity("");
                setLocationCity("");
                setImageCity("");
                alert("Votre message a été envoyé avec succé !")

            }).catch(() => {
                console.log("message not sent")
            })

    }
//delete animals galery :

const formDeleteAnimals =  (event) => {
    event.preventDefault();
       let id = parseInt(idAnimals);      
    console.log("----------------",id)
    axios.delete("http://localhost:3001/galery/animals" + id)
        .then(response => {
            console.log("my data", response.data)
            setSent(response.data);
            setIdAnimals("")
            alert("Le portrait  a été supprimé de la galerie avec succé !")

        }).catch(() => {
            console.log("image not deleted")
        })

}


    return (
        <div className="interfaceAdmin">
            <p>Bienvenu dans votre espace administrateur : </p>
            <Button onClick={() => history.push("/")} variant="contained" color="secondary" size="small" style={{ marginBottom: "10px" }}>
                <i className="fas fa-undo">Accueil</i>
            </Button>
            <div className="space-post">
                <div className="animalsSpace">
                    <h3>Galerie Annimaux</h3>
                    <form onSubmit={formSubmitAnimals}>
                        <label htmlFor="name">Nom</label><br />
                        <input type="text" className="name" value={name} onChange={handleName}/><br />
                        <label htmlFor="description">Description</label><br />
                        <textarea type="text" rows="5" cols="33" className="description" value={content} onChange={handleContent} /><br />
                        <label htmlFor="species">Espece</label><br />
                        <input type="text" className="species" value={species} onChange={handleSpecies} /><br />
                        <label htmlFor="speed">Vitesse</label><br />
                        <input type="text" className="speed" value={speed} onChange={handleSpeed} /><br />
                        <label htmlFor="size">Taille</label><br />
                        <input type="text" className="size"value={size} onChange={handleSize} /><br />
                        <label htmlFor="weight">Poids</label><br />
                        <input type="text" className="weight" value={weight} onChange={handleWeight} /><br />
                        <label htmlFor="picture">Image</label><br />
                        <input type="text" className="picture" value={image} onChange={handleImage} /><br />
                        <Button variant="outlined" color="primary" size="small" type="submit">Ajouter</Button>
                    </form>
                </div>
                <div className="naturesSpace">
                    <h3>Galerie Natures</h3>
                    <form onSubmit={formSubmitNature}>
                        <label htmlFor="name">Nom</label><br />
                        <input type="text" className="name" value={nameNature} onChange={handleNameNature} /><br />
                        <label htmlFor="description">Description</label><br />
                        <textarea type="text" rows="5" cols="33" className="description" value={contentNature} onChange={handleContentNature} /><br />
                        <label htmlFor="location">Lieu</label><br />
                        <input type="text" className="location" value={locationNature} onChange={handleLocationNature} /><br />
                        <label htmlFor="picture">Image</label><br />
                        <input type="text" className="picture" value={imageNature} onChange={handleImageNature} /><br />
                        <Button variant="outlined" color="primary" size="small" type="submit">Ajouter</Button>

                    </form>

                </div>
                <div className="architectureSpace">
                    <h3>Galerie Architectures</h3>
                    <form onSubmit={formSubmitCity}>
                        <label htmlFor="name">Nom</label><br />
                        <input type="text" className="name" value={nameCity} onChange={handleNameCity} /><br />
                        <label htmlFor="description">Description</label><br />
                        <textarea type="text" rows="5" cols="33" className="description" value={contentCity} onChange={handleContentCity} /><br />
                        <label htmlFor="location">Lieu</label><br />
                        <input type="text" className="location" value={locationCity} onChange={handleLocationCity} /><br />
                        <label htmlFor="picture">Image</label><br />
                        <input type="text" className="picture" value={imageCity} onChange={handleImageCity} /><br />
                        <Button variant="outlined" color="primary" size="small" type="submit">Ajouter</Button>
                    </form>

                </div>
            </div>
            <div className="space-delete">
                <div className="animalsSpace">
                    <h3>Galerie Annimaux</h3>
                    <form onSubmit={formDeleteAnimals}>
                        <label htmlFor="id">ID</label><br />
                        <input type="text" className="id" value={idAnimals} onChange={handleIdAnimals} /><br />
                        <Button variant="outlined" color="primary" size="small" type="submit">Supprimer</Button>
                    </form>

                </div>
                <div className="naturesSpace">
                    <h3>Galerie Natures</h3>
                    <form>
                        <label htmlFor="id">ID</label><br />
                        <input type="text" className="id" /><br />
                        <Button variant="outlined" color="primary" size="small" type="submit">Supprimer</Button>
                    </form>

                </div>
                <div className="architectureSpace">
                    <h3>Galerie Architectures</h3>
                    <form>
                        <label htmlFor="id">ID</label><br />
                        <input type="text" className="id" /><br />
                        <Button variant="outlined" color="primary" size="small" type="submit">Supprimer</Button>
                    </form>

                </div>
            </div>
            <div className="space-update">
                <div className="animalsSpace">
                    <h3>Galerie Annimaux</h3>
                    <form>
                        <label htmlFor="name">Nom</label><br />
                        <input type="text" className="name" /><br />
                        <label htmlFor="description">Description</label><br />
                        <textarea type="text" rows="5" cols="33" className="description" /><br />
                        <label htmlFor="species">Espece</label><br />
                        <input type="text" className="species" /><br />
                        <label htmlFor="speed">Vitesse</label><br />
                        <input type="text" className="speed" /><br />
                        <label htmlFor="size">Taille</label><br />
                        <input type="text" className="size" /><br />
                        <label htmlFor="weight">Poids</label><br />
                        <input type="text" className="weight" /><br />
                        <label htmlFor="picture">Image</label><br />
                        <input type="text" className="picture" /><br />
                        <Button variant="outlined" color="primary" size="small" type="submit">Modifier</Button>
                    </form>

                </div>
                <div className="naturesSpace">
                    <h3>Galerie Natures</h3>
                    <form>
                        <label htmlFor="name">Nom</label><br />
                        <input type="text" className="name" /><br />
                        <label htmlFor="description">Description</label><br />
                        <textarea type="text" rows="5" cols="33" className="description" /><br />
                        <label htmlFor="location">Lieu</label><br />
                        <input type="text" className="location" /><br />
                        <label htmlFor="picture">Image</label><br />
                        <input type="text" className="picture" /><br />
                        <Button variant="outlined" color="primary" size="small" type="submit">Modifier</Button>
                    </form>

                </div>
                <div className="architectureSpace">
                    <h3>Galerie Architectures</h3>
                    <form>
                        <label htmlFor="name">Nom</label><br />
                        <input type="text" className="name" /><br />
                        <label htmlFor="description">Description</label><br />
                        <textarea type="text" rows="5" cols="33" className="description" /><br />
                        <label htmlFor="location">Lieu</label><br />
                        <input type="text" className="location" /><br />
                        <label htmlFor="picture">Image</label><br />
                        <input type="text" className="picture" /><br />
                        <Button variant="outlined" color="primary" size="small" type="submit">Modifier</Button>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default InterfaceAdmin; 