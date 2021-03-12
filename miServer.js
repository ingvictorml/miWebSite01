//Se incluye el modulo express al archivo como lo indica la documentación de https://expressjs.com/es/starter/hello-world.html
var express = require('express');
var app = express();
//En el navegador al recibir la ruta principal como respuesta mostrara ‘Hello World!’
app.get('/', function (req, res) {
    res.send('index.html');
});
app.listen(3000, function () {
    //En la consola se mostrara un mensaje ‘Example app listening on port 3000!’
    console.log('Server is runnig, listening on port 3000!');
});