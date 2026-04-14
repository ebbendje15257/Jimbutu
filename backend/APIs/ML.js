import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const dados = [] 

app.post("/dados", (req, res) => {

    dados = req.body 
    res.status(202).send("Dados recebidos")
})

app.get("/")