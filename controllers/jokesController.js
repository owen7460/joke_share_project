"use strict";

const db = require("../db");

const getJokes = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM jokes ORDER BY joke_created_at DESC",
    );
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

const likeJoke = async (req, res) => {
  const { joke_id } = req.params;
  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    const [result] = await connection.query(
      "INSERT INTO votes (joke_id) VALUES (?)",
      [joke_id],
    );
    await connection.query(
      "UPDATE jokes SET like_count = like_count + 1 WHERE joke_id = ?",
      [joke_id],
    );

    await connection.commit();
    res.status(200).json({
      message: "the joke has been liked",
      joke_id,
      vote_id: result.insertId,
    });
  } catch (err) {
    await connection.rollback();
    console.error("DB error:", err);
    res.status(500).json({ error: "DB error" });
  } finally {
    connection.release();
  }
};

module.exports = { getJokes, upLoadJoke, likeJoke };
