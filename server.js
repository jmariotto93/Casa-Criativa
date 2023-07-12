// Usei o express para criar e configurar meu sevidor 
const express = require("express")
const server = express()

const ideas = [
    {
        img: "https://cdn-icons-png.flaticon.com/128/2317/2317963.png",
        title: "Curso de programação",
        category: "Estudo",
        description: "Leandro Guarino e Luiz Eduardo Guarino são professores na área de TI há mais de 18 anos, e atuam com desenvolvimento de software no mercado desde o início dos anos 2000.",
        url: "https://www.youtube.com/@2guarinos"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/1719/1719726.png",
        title: "Exercicios",
        category: "Saúde",
        description: "Se você quer emagrecer de um jeito super prático você veio ao lugar certo! A Exercício em Casa é a primeira academia online do Brasil!",
        url: "https://www.youtube.com/@exercicioemcasa"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/10812/10812647.png",
        title: "Meditação",
        category: "Mentalidade",
        description: "Muita natureza e músicas e sons para relaxar, estudar e dormir bem. Aproveitem! Muita paz a todos bem vindos ao meu canal! ",
        url: "https://www.youtube.com/@CassioToledo"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/808/808439.png",
        title: "Jogo de Videogame",
        category: "Diversão",
        description: "Steam é um software de gestão de direitos digitais criado pela Valve Corporation ou Valve L.L.C., de plataformas digitais como jogos e aplicativos de programação e fornece serviços facilitados como atualização automática de jogos",
        url: "https://store.steampowered.com/?l=portuguese"
    }
]


// Configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

// Configuração do nunjacks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express:server,
    noCache: true,
})

// Criei uma rota /
// e capturo o pedido do cliente para responder 
server.get("/", function(req, res) {

    const reversedIdeas = [...ideas].reverse()  

    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if (lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }


    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias", function(req, res) {
    
    const reversedIdeas = [...ideas].reverse() 

    return res.render("ideias.html", { ideas: reversedIdeas})
})


//Liguei meu servidor na porta 3000
server.listen(3000)

