const express = require('express')
const gerador = require('gerador-nome')
const app = express()
const port = 3000

const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'mydb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
    const nomeAleatorio = gerador.geradorNome()
  
    connection.query(`INSERT INTO pessoas (nome) VALUES ('${nomeAleatorio}')`)
  
    connection.query(`SELECT nome FROM pessoas`, (error, results, fields) => {
      res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ul>
          ${!!results.length ? results.map(el => `<li>${el.nome}</li>`).join('') : ''}
        </ul>
      `)
    })
})

app.listen(port, () => {
    console.log('Rodando na porta', + port)
})