module.exports = function(app) {
  
      const Usuario = app.controllers.usuario;
  

    app.route('/usuarios')
        .get(Usuario.getRecords);

    app.route('/cadastro')
        .post(Usuario.insertRecord);
            
  };
  