// Ejercicio 1
const arreglo = [8, 55, 7, -3, 0.75, 17.05, 666777, 4, 555555, 85, 92, 48, 13, 983];

let prom = 0;
let count = 0;
for (let i = 0; i < arreglo.length; i++){
    prom += arreglo[i];
    count += 1;
}
const promedio = prom / count;
console.log("El promedio es " + promedio);

// Ejercicio 2
const filesystem = require('fs');

filesystem.writeFileSync("Hola.txt", "¡Esto funciona y esta en un archivo de texto!");

// Ejercicio 3 (máximo)
const maximo = (arreglo_max) => {
  let max = arreglo_max[0];
  // Se recorre el arreglo buscando el número máximo
  for (let i = 0; i < arreglo_max.length; i++){
    // Si el siguiente número es más grande se sobreescribe
    if (max < arreglo_max[i]){
      max = arreglo_max[i];
    }
  }
  // Regresas ese numero
  return max;
};

// Imprimes el resultado en la consola llamando la función
const answer = maximo(arreglo);
console.log("El número más grande del arreglo es: " + answer);


// Petición al servidor local
const http = require("http");
// Creas el servidor con create server
const server = http.createServer( (request, response) => {
    // Imprime el url que pidio el usuario con el servidor (cuando busca localhost:3000)
    console.log(request.url);
    // Le dice al servidor que responda con contenido de html y de texto
    response.setHeader("Content-Type", "text/html");
    response.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>¡¡Laboratorio 8: Respuesta de un servidor!!!</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <!-- Aquí se usan los íconos de font awesome  -->
        <script src="https://kit.fontawesome.com/98026b1a47.js" crossorigin="anonymous"></script>
      </head>
      <body>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="https://bulma.io">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Deadpool_logo.jpg" width="112" height="28">
              </a>
          
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <a id="boton_casa" class="navbar-item">
                  Esta es mi casa
                </a>
          
                <a class="navbar-item">
                  Y este es un nav item que no hace nada
                </a>
              </div>
          
              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <a id="boton_disparar" class="button is-primary">
                      <strong>Disparar Enemigo</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
      <section class="section">
        <div class="container">
          <h1 id="title" class="title">Hello there</h1>
          <div class="block">
            <figure>
                <img id="imagen_disparar" src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/02/1484222978-deadpool.jpg?resize=1200:*">
            </figure>
          </div>
        </div>
      </section>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
      </body>
      </html>
      `);
    // Envía la respuesta del servidor
    response.end();
});

// Para que el servidor este activo, hay que decirle que escuche peticiones en un puerto (3000)
server.listen(3000);