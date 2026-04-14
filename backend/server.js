import express from "express";
import { DatabaseSync } from "node:sqlite";
import multer from "multer";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const db = new DatabaseSync("Database.db");

db.exec(`CREATE TABLE IF NOT EXISTS users(
    
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    pais TEXT,
    chave TEXT,
    passe TEXT
    
)`);

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/cadastro", upload.single("foto"), (req, res) => {
  const user = {
    ...req.body,
    foto: req.file,
  };

  db.prepare(
    `INSERT INTO users(name, email, pais, chave, passe)
     values(?, ?, ?, ?, ?)`,
  ).run(user.name, user.email, user.pais, user.chave, user.passe);

  res.status(201).send("cadastro feito!");
});

app.get("/login", (req, res) => {
  const user = db.prepare(`SELECT * FROM users`).all();
  res.status(200).json(user);
});

app.listen(3000);
