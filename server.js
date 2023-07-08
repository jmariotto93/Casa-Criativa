// Usei o express para criar e configurar meu sevidor 
const express = require("express")
const server = express()

// Configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

// Configuração do nunjacks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express:server,
    noCache: true,
})

// Criei uam rota /
// e capturo o pedido do cliente para responder 
server.get("/", function(req, res) {
    return res.render("index.html")
})

server.get("/ideias", function(req, res) {
    return res.render("ideias.html")
})



//Liguei meu servidor na porta 3000
server.listen(3000)

