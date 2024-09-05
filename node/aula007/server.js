const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

// http:/facebook.com/profiles/12344 -> params
// http:/facebook.com/profiles/12344?campanha=googleads&nome_campanha=seila -> o interrogação inicia a query strings "&" faz o par de chave

app.get('/', (req, res) => {
    res.send(`
    <form action = "/" method = "POST">
        Nome: <input type="text" name="nome"></input>
        OutroCampo: <input type="text" name="outroCampo"></input>
        <button>Botão</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    
    res.send(`Olá ${req.query.nome}`);    
});

app.post('/', (req, res) => {
    console.log(req.body);
    
    res.send(`O que vc me enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    
    console.log('Servidor executando na porta 3000');
});
