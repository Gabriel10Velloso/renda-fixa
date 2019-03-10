module.exports = function(app) {

    const api = {};
    const Usuario = app.models.usuario;

   
    api.getRecords = function(req, res, next) {
        Usuario.find()
        // .select('nome email image')
        .exec((err, usuarios) => {
            if (err) {
                return next(err);
            }
            return res.status(200).send({
                usuarios: usuarios
            });
        });
    };


    api.insertRecord = function(req, res, next) {
        var usuario = new Usuario(req.body); 
        
        Usuario.findOne({
            email: usuario.email
        }, (err, savedUser) => {                        
            if (err) {
                return next(err);
            }
            // Verifica a existência de usuários no banco de dados.
            if (savedUser) {
                return res.status(400).json({
                    error: 'Usuário existente 😕'
                });
            }
            
            usuario.save((err, usuario) => {
                if(err) {
                    return next(err);
                }
                res.json(usuario)
            });
        });
    };

    return api;
};