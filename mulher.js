const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostrarMulher(request, response) {
 response.json({
    nome: 'Manuela Thomazia',
    minibio: 'CEO da OVE'
 })
}

function mostrarPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostrarMulher))
app.listen(porta, mostrarPorta)