const express = require("express");

const bodyParser = require("body-parser");
const main = require("./routes/main");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/", main);
app.listen(5000, () => {
  console.log("server Started on port 5000");
});
