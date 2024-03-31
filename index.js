const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();
var Route = require("./routes/Route");

// Handlebars

const hand = require("express-handlebars");

//UTILIZAÇÃO DO HANDLEBARS

app.set("view engine", "html");
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use("/", Route);

app.listen(port, () => console.log("servidor iniciado"));
