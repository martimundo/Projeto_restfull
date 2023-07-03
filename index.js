/**
 * Subindo um servidor com node.js
 * Com esses comandos podemos criar um servidor web com o node.
 */
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

//let routesIndex = require('./routes/index');
//let routesUsers = require('./routes/users');

//acesso atraves de rotas.
let app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


/**
 * As rotas abaixo foram carregadas pelo express
 */
// app.use(routesIndex);
// app.use('/users',routesUsers);

//Criando Rodas com com Consign
/**
 * O consing e como um método que precisa ser invocado para indicar todos os meus arquivos de todas.
 */
consign().include('routes').include('utils').into(app);


app.listen(3000, "127.0.0.1", () => {

    console.log("servidor UP!");
});