
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
})

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());

const animalsRouter = require("./routes/animals");
const natureRouter = require("./routes/nature");
const architectureRouter = require("./routes/architecture");

app.use("/", animalsRouter);
app.use("/", natureRouter);
app.use("/", architectureRouter); 

app.use((req, res, next) => {
    res.status(404).send("<img src='https://worldofvoz.files.wordpress.com/2020/01/http-error-404-not-found.png' />")
})


app.listen(port, (err) => {
    if (err) {
        throw new Error("Something bad happened...");
    }
    console.log(`Server is listening on ${port}`);
})