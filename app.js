"use strict";

const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("hello,developer");
});

app.listen(port, () => {
  console.log(`test successfully, the port is ${port}`);
});
