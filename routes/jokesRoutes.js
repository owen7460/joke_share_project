"use strict";

const express = require("express");
const router = express.Router();

const { getJokes, upLoadJoke } = require("../controllers/jokesController");

router.get("/", getJokes);
router.post("/", upLoadJoke);

module.exports = router;
