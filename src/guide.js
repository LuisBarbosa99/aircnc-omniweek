const express = require('express')

const app = express()

app.use(express.json())

//hello world

app.get('/', (req, res)=> {
    return res.send("Hello World")
})


//hello world em JSON
app.get('/', (req, res)=> {
    return res.json({message: "Hello World"})
})

//metodo POST
//req.body = Acessar corpo da requisição (para criar e editar)
app.post('/users', (req, res)=> {
    return res.json(req.body)
})

//método GET
//req.query = Acessar query params (para filtros)
app.get('/users', (req, res)=> {
    return res.json({idade: req.query.idade})
})

//Método PUT
//req.params = Acessar route params (para editar e deletar)
app.put('/users/:id', (req, res)=> {
    return res.json({id: req.params.id})
})

app.listen(3333)

