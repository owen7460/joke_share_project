"use strict";

const db = require("../db");

const getJokes = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM jokes");
    res.json(rows);
  } catch (err) {
    console.error("DB error full:", err);
    res.status(500).json({ error: "DB error" });
  }
};

const upLoadJoke = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content || !content.trim()) {
      return res
        .status(400)
        .json({ error: "there is no content, please input content." });
    }

    const [result] = await db.query("INSERT INTO jokes (content) VALUES (?)", [
      content.trim(),
    ]);

    res.status(201).json({
      message: "the joke has been added to our web",
      joke_id: result.insertId,
    });
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).json({ error: "DB error" });
  }
};

module.exports = { getJokes, upLoadJoke };
