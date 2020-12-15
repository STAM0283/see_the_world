import Modal from "react-modal";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import web_social from "../images/web_social.png"

const Footer = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div className="footer">
            <Modal isOpen={modalIsOpen}
            ariaHideApp={false}>
                <Button variant="outlined" color="primary" size="small" onClick={() => setModalIsOpen(false)}>Hide Modal</Button>
                <div className="about-us">
                    <p>C’est toujours la même histoire. A chaque arrivée sur un nouveau continent, un nouveau pays, une nouvelle ville,
                    ce sentiment enivrant prend le dessus. Cette sensation qui te fait penser que le monde est immense, qu’il y a
                    tant de choses à découvrir. Ce qui te fait comprendre que tu n’es qu’une goutte d’eau dans un univers immensément
                    grand. Ce sentiment, je l’ai évidemment vécu en arrivant à Tokyo. A peine descendu de mon avion Air France
                    qui reliait la capitale française à la capitale nippone, j’ai compris que mon arrêt de 4 jours à Tokyo allait
                    prendre une plus grande importance dans mon voyage que prévu. Le timing était clairement trop court pour visiter
                    de fond en comble cette immense ville de plus de 40.000.000 d’habitants dont chaque point d’intérêt peut se situer
                    à plus d’une heure de votre lieu de logement. Qu’importe. Tokyo est une ville qui se visite avec générosité, ou
                  qui ne se visite pas.</p>
                </div>
                <div>
                    <img src={web_social} alt="Picture_Modal" style={{width: "40%", height: "150px", marginLeft: "30%"}} />
                </div>

            </Modal>
            <Button variant="outlined" color="primary" size="small" style={{ marginTop: "10px" }} onClick={() => setModalIsOpen(true)}>ABOUT US</Button>

        </div>
    )
}

export default Footer; 