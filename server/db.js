const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "hairuser",
  password: "Hair@123",
  database: "hairstylist_db"
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL database!");
  }
});

module.exports = db;
