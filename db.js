"use strict";

const mysql = reuqire("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "xouyang_xouyang_joke_admin",
  password: process.env.DB_PASSWORD,
  database: "xouyang_joke_share",
  waitForConnections: true,
  connectionLimit: 10,
  charset: "utf8mb4",
});

module.exports = pool;
