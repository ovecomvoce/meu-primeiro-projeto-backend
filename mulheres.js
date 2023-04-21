const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        Nome: 'Manuela',
        Minibio: 'Ceo da OVE'
    },
    {
        Nome: 'Manuela2',
        Minibio: 'Ceo da OVE'
    },
    {
        Nome: 'Manuela3',
        Minibio: 'Ceo da OVE'
    },
    
]

function mostrarMulher(request, response){
    response.json(mulheres)
}

function mostrarPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostrarMulher))
app.listen(porta, mostrarPorta)