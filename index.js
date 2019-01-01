const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.get("/en", (req, res) => {
  console.log("m here");
  res.send({ hi: "en" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
