"use strict";

require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const jokesRoutes = require("./routes/jokesRoutes");
app.use("/api/jokes", jokesRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
