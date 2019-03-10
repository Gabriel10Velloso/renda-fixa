module.exports = function (app) {

    const mongoose = require('mongoose');

    const Schema = mongoose.Schema;

    const UsuarioSchema = new Schema({


        nome: {
            type: String
        },
        email: {
            type: String
        },
        telefone:{
            type: String
        },

        url_avatar: {
            type: String
        },

    });

    return mongoose.model('Usuario', UsuarioSchema);

};