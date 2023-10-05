const express = require('express');
const routerExpress = express.Router();

const mainController = require('./controller/mainController');

routerExpress.get('/', mainController.getAllPokemons);

routerExpress.get('/detail/:numero', mainController.getPokemonByNumero);

routerExpress.use((req, res) => {
    res.status(404).render('404');
});

module.exports = routerExpress;
