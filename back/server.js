// var http = require('http');
// var app = require('./config/express');
// require('./config/database');

// http.createServer(app).listen(3000, function(){
//     console.log('Porta rodando 3000');
// });

const runDeletCron = true;

if (runDeletCron) {
  // call cronjob method
}

var app = require('./config/express');
require('./config/database');

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('Node executando na porta ', app.get('port'));
});