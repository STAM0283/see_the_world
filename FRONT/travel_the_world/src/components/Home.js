import { useHistory } from "react-router-dom";
import Slideshow from "./Slide";
import React from "react";
import building from "../images/building.jpg";
import cat from "../images/cat.jpg";
import nature from "../images/nature.jpg";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";



const Home = (props) => {
    const galery = props.dataMovie.galery;
    console.log("@@@@@@@@@@", galery)
    const history = useHistory();

    const selectPicture = (event) => {
        let id = parseInt(event.target.id);
        props.dataMovie.setGalery((prevState) => prevState.filter((item) => item.id === id));
        history.push("/picture");

    };

    return galery !== null ? (
        <div className="home">
            <Slideshow />
            <div className="galery-container">
                <div className="galery-menu">
                    <div>
                        <img src={cat} alt="picture-cat" /><br />
                        <Button variant="outlined" color="primary" size="small" onClick={() => props.dataMovie.setQuery("animals")}>Gallery Annimaux</Button>
                    </div>
                    <div>
                        <img src={nature} alt="picture-nature"/><br />
                        <Button variant="outlined" color="primary" size="small" onClick={() => props.dataMovie.setQuery("natures")}>Gallery Natures</Button>
                    </div>
                    <div>
                        <img src={building} alt="picture-building" /><br />
                        <Button variant="outlined" color="primary" size="small" onClick={() => props.dataMovie.setQuery("architectures")}>Gallery Natures</Button>
                    </div>
                </div>
                <div className="imagesPerGalery">
                    {
                        galery.map((item) => {
                            return (
                                <Card style={{ marginTop: "10px" }}>
                                    <div className>
                                        <Card style={{ backgroundColor: "#87CEFA" }}>
                                            <p>{item.name}</p>
                                        </Card>
                                        <img id={item.id} src={item.image} onClick={selectPicture} />
                                    </div>
                                </Card>
                            )

                        })
                    }

                </div>

            </div>
        </div>
    ) : (
            <div>
                <Slideshow />
                <div className="galery-menu">
                    <div>
                        <img src={cat} alt="picture-cat" /><br />
                        <Button variant="outlined" color="primary" size="small" onClick={() => props.dataMovie.setQuery("animals")}>Gallery Annimaux</Button>
                    </div>
                    <div>
                        <img src={nature} alt="picture-nature"/><br />
                        <Button variant="outlined" color="primary" size="small" onClick={() => props.dataMovie.setQuery("natures")}>Gallery Natures</Button>
                    </div>
                    <div>
                        <img src={building} alt="picture-building" /><br />
                        <Button variant="outlined" color="primary" size="small" onClick={() => props.dataMovie.setQuery("architectures")}>Gallery Natures</Button>
                    </div>
                </div>
            </div>
        )
}
export default Home; 