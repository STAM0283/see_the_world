import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../App.css';



const useStyles = makeStyles((theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));


const ImageSelected = (props) => {

    const history = useHistory();

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const onClickReturn = () => {
        history.push("/");
        props.dataMovie.setQuery("");

    }

    return props.dataMovie.galery !== null ? (
        < div className="wrapper">
            <Button onClick={onClickReturn} variant="contained" color="secondary" size="small" style={{ marginBottom: "10px" }}>Retour</Button>
            <div className="home">
                {props.dataMovie.galery.map((item, index) => {
                    return (
                        <Card key={index} className="imageSelected">
                            <Card style={{ backgroundColor: "#87CEFA", margin: "5px" }}>
                                <h6>Nom: {item.name}</h6>
                                <p>{item.species ? "Espéce : " + item.species : ""}</p>
                                <p>{item.size ? "Taille : " + item.size : ""}</p>
                                <p>{item.weight ? "Poids : " + item.weight : ""}</p>
                                <p>{item.speed ? "vitesse : " + item.speed : "lieu : " + item.location}</p>
                            </Card>
                            <img src={item.image} alt="" />

                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                                <p>show more</p>
                            </IconButton>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>
                                        <p>{item.content}</p>
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    );
                })}

            </div>
        </div>
    ) : (
            <p>Pas de data</p>
        )
}

export default ImageSelected; 