const mongoose = require('mongoose');
    const uri = 'mongodb://localhost/teste_db'

    mongoose.connect(uri,{ useCreateIndex: true, useNewUrlParser: true } );

    mongoose.Promise = global.Promise;

    const db = mongoose.connection;

    db.on('connected' , function(){
            console.log('Conectado ao banco de dados App Renda Fixa');
    });

    db.on('error', console.error.bind(console, 
        'MongoDB connection error:'));
