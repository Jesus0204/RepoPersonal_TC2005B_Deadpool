// Para usar express en vez de http
const express = require('express');
// Inicia la app usuando a express
const app = express();

const path = require('path');

// Manipular facil los datos de las peticiones
const bodyParser = require('body-parser');

// Configura bodyparser
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});


const rutasWolverine = require('./routes/wolverine.routes.js');

app.use('/', rutasWolverine);

// Ahora se envia la respuesta con un archivo html que se encuentra en la carpeta views
app.use((request, response, next) => {
  response.status(404);
  response.sendFile(
    path.join(__dirname, 'views', '404.html')
    );
});

// Para que el servidor este activo
app.listen(3000);