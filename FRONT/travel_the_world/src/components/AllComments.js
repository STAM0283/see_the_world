import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { useHistory } from "react-router-dom";


const AllComments = () => {
    const history = useHistory();
    const [comments, setComments] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:3001/galery/comments")
            .then((response) => {
                console.log(response.data);
                setComments(response.data);
            })

    }, [])
    return comments !== null ? (
        <div>
            <Button onClick={() => history.push("/")} variant="contained" color="secondary" size="small" style={{ marginBottom: "10px" }}><i className="fas fa-undo">Accueil</i></Button>
            <div className="comment-container">
                {
                    comments.map((item) => {
                        return (

                            <Card className="comment-user">
                                <Card style={{ backgroundColor: "#87CEFA", margin: "5px" }}>
                                    <p>{item.name}</p>
                                </Card>
                                <p>{item.content}</p>
                            </Card>


                        )
                    })
                }
            </div>
        </div>
    ) : (
            <div>
                Enchargement
            </div>
        )
}

export default AllComments; 