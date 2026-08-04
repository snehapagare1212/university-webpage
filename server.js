import express, { json, urlencoded } from "express";
import mysql from "mysql2";
import cors from "cors";
import { hash, compare } from "bcrypt";

const app = express();   // create app first

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// MySQL Connection
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

// Register API
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await hash(password, 10);

        const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

        db.query(sql, [name, email, hashedPassword], (err) => {
            if (err) {
                return res.status(500).send(err.message);
            }

            res.send("User registered successfully");
        });

    } catch (error) {
        res.status(500).send(error.message);
    }
});


// Login API
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required"
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

        // User not found
        if (result.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const user = result[0];

        try {
            // Compare entered password with hashed password
            const isMatch = await compare(password, user.password);

            if (!isMatch) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid email or password"
                });
            }

            // Login successful
            res.status(200).json({
                success: true,
                message: "Login successful",
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    });
});



app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});