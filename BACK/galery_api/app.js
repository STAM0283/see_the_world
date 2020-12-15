const rateLimit = require("express-rate-limit");
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

const limiter = rateLimit({
    windowMs: 3 * 60 * 1000,
    max: 30, // per IP
  });
  
app.use(limiter);
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());

const animalsRouter = require("./routes/animals");
const natureRouter = require("./routes/nature");
const architectureRouter = require("./routes/architecture");
const commentsRouter = require("./routes/commente")

app.use("/galery", animalsRouter);
app.use("/galery", natureRouter);
app.use("/galery", architectureRouter);
app.use("/galery", commentsRouter); 

app.use((req, res, next) => {
    res.status(404).send("<img src='https://worldofvoz.files.wordpress.com/2020/01/http-error-404-not-found.png' />")
})


app.listen(port, (err) => {
    if (err) {
        throw new Error("Something bad happened...");
    }
    console.log(`Server is listening on ${port}`);
})