const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to Passport");
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}...`);
});