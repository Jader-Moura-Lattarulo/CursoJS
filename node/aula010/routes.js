const express = require('express');
const route = express.Router(); //Possível usar como rota
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

//Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rodas de contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;
