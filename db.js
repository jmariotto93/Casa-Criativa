const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./CASA-CRIATIVA.db')


db.serialize(function (){

// Criar a tabela 
db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT

    );
`)

// Inserir dados na tabela
const query = `
INSERT INTO  ideas(
    image,
    title,
    category,
    description,
    link


) VALUES (?,?,?,?,?);
`

const values = [
    "https://cdn-icons-png.flaticon.com/128/2317/2317963.png",
    "Curso de programação",
    "Estudo",
    "Leandro Guarino e Luiz Eduardo Guarino são professores na área de TI há mais de 18 anos, e atuam com desenvolvimento de software no mercado desde o início dos anos 2000.",
    "https://www.youtube.com/@2guarinos"
]

//db.run(query, values, function(err) {
//    if(err) return console.log(err)

//    console.log(this)
//}) 

// Consultar dados na tabela
 db.all(`SELECT * FROM ideas`, function(err, row) {
    if (err) return console.log(err)
    
    console.log(row)

 })
// Deletar um dado da tabela
//db.run(`DELETE FROM ideas WHERE id = ?`, [2], function(err) {
//  if (err) return console.log(err)

// console.log('Deletei', this)
//})
})