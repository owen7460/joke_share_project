"use strict";

const express = require("express");
const router = express.Router();

const {
  getJokes,
  upLoadJoke,
  likeJoke,
} = require("../controllers/jokesController");

router.get("/", getJokes);
router.post("/", upLoadJoke);
router.post("/:joke_id/like", likeJoke);

module.exports = router;
