"use strict";

require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./db");

const port = 3000;

// app.get("/", (req, res) => {
//   res.send("hello,developer");
// });

app.get("api");

app.listen(port, () => {
  console.log(`test successfully, the port is ${port}`);
});
