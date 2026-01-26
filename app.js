"use strict";

require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const jokesRoutes = require("./routes/jokesRoutes");
app.use("/api/jokes", jokesRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
