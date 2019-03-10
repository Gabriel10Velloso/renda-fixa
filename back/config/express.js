// teste
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();


 
// Setting http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Body-Parser parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

// consign carrega os módulos abaixo 
consign({ cwd: 'app' })
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app);


// Caminho - '../dist' de produção (Servidor - Heroku)
app.use(express.static(path.join(__dirname, '../dist')));

app.all('*', function(req, res) {
    res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
});


// Erro servidor se a porta estiver em uso.
app.use(function(err, req, res, next) {
    if (err instanceof TypeError) {
        return res.status(400).json({ erro: err.message });
    }
    res.status(err.status || 500).json({ erro: err.message });
});

app.handleValidationErrors = function(errObj, res) {
    res.status(400).json(errObj);
};

module.exports = app;