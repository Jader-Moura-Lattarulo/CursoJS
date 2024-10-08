const express = require('express');
const route = express.Router(); //Possível usar como rota
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

function meuMiddleware(req, res, next) {
    req.session = { nome: 'Jader', sobrenome: 'Moura'};
    console.log();
    console.log('Passei no seu middleware');
    console.log();    
    next();
}

//Rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next){
    console.log();
    console.log('Ainda estou aqui...');    
});
route.post('/', homeController.trataPost);

//Rodas de contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;
