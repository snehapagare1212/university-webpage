import express, { json, urlencoded } from "express";
import mysql from "mysql2";
import cors from "cors";
import { hash, compare } from "bcrypt";

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ab"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
        return;
    }
    console.log("MySQL Connected");
});

// ================= REGISTER =================

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await hash(password, 10);

        const sql = "INSERT INTO users(name,email,password) VALUES(?,?,?)";

        db.query(sql, [name, email, hashedPassword], (err) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.json({
                success: true,
                message: "User registered successfully"
            });
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// ================= LOGIN =================

app.post("/login", (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and Password are required"
        });
    }

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        if (result.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Invalid Email or Password"
            });
        }

        const user = result[0];

        try {

            const isMatch = await compare(password, user.password);

            if (!isMatch) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid Email or Password"
                });
            }

            return res.json({
                success: true,
                message: "Login Successful",
                name: user.name,
                email: user.email
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message
            });

        }

    });

});

// ================= SERVER =================

app.listen(3000, "127.0.0.1", () => {
    console.log("Server running on http://127.0.0.1:3000");
});