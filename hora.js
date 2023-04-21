const express = require('express')
const router = express.Router()
const app = express()

app.use(express.json())

const porta = 3333

function mostrarHora(request, response) {

    const data = new Date()
   
    const hora = data.toLocaleTimeString('pt-BR')
   
    response.send(hora)
   
   }

function mostrarPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/hora', mostrarHora))
app.listen(porta, mostrarPorta)