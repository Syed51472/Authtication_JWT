const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const indexRoute = require("./route/index.js");
const sequelize = require("./models/index.js");

var app = express();

var corOptions = {
  origin: "http://localhost:4200",
};

app.use(cors(corOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", indexRoute);

app.get("/", (req, res) => {
  res.json({ message: "Server is running..." });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is connected at port ${PORT}`);
});
