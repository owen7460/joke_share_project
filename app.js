"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db");

const port = 3000;

app.get("/api/jokes", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM jokes");
    res.json(rows);
  } catch (err) {
    console.error("DB error full", err);
    res
      .status(500)
      .json({ error: "DB error", code: err.code, message: err.message });
  }
});

app.listen(port, () => {
  console.log(`On port ${port}`);
});
