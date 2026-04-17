import express from "express";
import { DatabaseSync } from "node:sqlite";
import multer from "multer";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const db = new DatabaseSync("Database.db");

db.exec(`CREATE TABLE IF NOT EXISTS users(
    
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    email TEXT,
    pais TEXT,
    chave INTEGER,
    passe TEXT
    
)`);

db.exec(`CREATE TABLE IF NOT EXISTS posts(

  post TEXT

  )`)

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/cadastro", upload.none(), (req, res) => {
  const { username, email, pais, chave, passe } = req.body;

  const user = {
    username: username.trim().toLowerCase(),
    email: email.trim(),
    pais: pais.trim(),
    chave: chave ? parseInt(chave) : 0,
    passe: passe.trim(),
  };

  try {
    const existeUser = db
      .prepare(`SELECT id FROM users WHERE email = ?`)
      .get(user.email);
    if (existeUser) {
      return res.status(409).send("Esse email já possui uma conta!");
    }

    db.prepare(
      `INSERT INTO users(username, email, pais, chave, passe)
       VALUES (?, ?, ?, ?, ?)`,
    ).run(user.username, user.email, user.pais, user.chave, user.passe);

    res.status(201).send("Usuario criado com sucesso!");
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.post("/login", (req, res) => {
  const { username, passe } = req.body;

  const user = db
    .prepare(`SELECT * FROM users WHERE username = ? AND passe = ?`)
    .get(username, passe);

  if (!user || user.passe !== passe) {
    return res.status(400).json({ error: "Credenciais inválidas" });
  }

  res.status(200).json({ message: "Login bem-sucedido!" });
});

app.post("/publicacao", (req, res) =>{
    const {post, imgPost} = req.body
})

app.listen(3000, () => {
  console.log("Servidor rodando...");
});
