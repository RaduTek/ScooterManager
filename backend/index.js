const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());

const dbcon = mysql.createConnection({
    host: "localhost",
    user: "scooter",
    password: "scooter123",
    database: "scooter",
});

dbcon.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL database!");
});

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get("/api/scooters", (req, res) => {
    dbcon.query(
        "SELECT * FROM scooters WHERE status <> 'offline'",
        function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        }
    );
});

app.post("/api/account/login", (req, res) => {
    const request = req.body;
    console.log(request);
    res.json({ status: "ok", id: "0000000" });
});

app.post("/api/account/signup", (req, res) => {
    const request = req.body;
    console.log(request);

    const id = uuidv4();
    let hashedPwd = "";
    bcrypt.hash(request.password, 10, (err, hash) => {
        if (err) {
            res.status(500).json({ status: "error" });
        } else {
            hashedPwd = hash;
        }
    });

    const query =
        "INSERT INTO users (id, name, email, password, balance, rights) VALUES (?, ?, ?, ?, ?);";
    dbcon.query(
        query,
        [id, request.email, hashedPwd, 0, "user"],
        (err, result) => {
            if (err) {
                res.status(500).json({ status: "error" });
            } else {
                res.json({ status: "ok", userId: id });
            }
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
