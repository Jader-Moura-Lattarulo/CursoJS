const express = require('express');
const app = express();

//https://meusite.com/ <- GET -> Entregue a página
//https://meusite.com/sobre <- GET -> Entregue a página /sobre

//CRUD -> Create, Read, Update, Delete
//        Post    Get   Put     Delete

app.get('/', (request, response) => {
    response.send(`
    <form action = "/" method = "POST">
        Nome: <input type="text" name="nome"></input>
        <button>Botão</button>
    </form>
    `);
});

app.post('/', (request, response) => {
    response.send('Recebi o formulário');
});

app.get('/contato', (request, response) => {
    response.send('Obrigado por entrar em contato com a gente.');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    
    console.log('Servidor executando na porta 3000');
});
