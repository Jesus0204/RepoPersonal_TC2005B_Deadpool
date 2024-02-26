// Módulo de node con todas las funciones de un servidor web
const http = require("http");

const header = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>¡¡Lab 10: Rutaaas!!</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <!-- Aquí se usan los íconos de font awesome  -->
        <script src="https://kit.fontawesome.com/98026b1a47.js" crossorigin="anonymous"></script>
      </head>
      <body>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="http://localhost:3000/">
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
                <a class="navbar-item" href="/">
                   Home
                </a>

              <div class="navbar-item">
                <a id="boton_casa" class="navbar-item">
                  Esta es mi casa
                </a>
          
                <a class="navbar-item" href="/wolverine">
                  Enviar mensaje a Wolverine
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
          `;

const footer = `
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
        <script>
            const boton = document.getElementById("boton_disparar");

            const disparar_enemigo = () => {
                const imagen = document.getElementById("imagen_disparar");
                imagen.src = "https://www.japantimes.co.jp/wp-content/uploads/2016/06/p9-hadfield-deadpool-a-20160602.jpg";
            
                boton.innerHTML = "Matar Enemigo";
                boton.className = "button is-danger is-light";
                boton.onclick = matar_enemigo;
            
            }
            
            boton.onclick = disparar_enemigo;
            
            const matar_enemigo = () => {
                const imagen = document.getElementById("imagen_disparar");
                imagen.src = "https://variety.com/wp-content/uploads/2020/08/deadpool.jpg?w=1000&h=563&crop=1&resize=1000%2C563";
            
                boton.innerHTML = "Rematar Enemigo";
                boton.className = "button is-danger";
            
                boton.onclick = rematar_enemigo;
            
            }
            
            const rematar_enemigo = () => {
                const imagen = document.getElementById("imagen_disparar");
                imagen.src = "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/02/1484222978-deadpool.jpg?resize=1200:*";
            
                boton.innerHTML = "Disparar Enemigo";
                boton.className = "button is-primary";
            
                boton.onclick = disparar_enemigo;
            }
            
            const casa = document.getElementById("boton_casa")
            
            const Esta_es_mi_casa = () => {
                const imagen = document.getElementById("imagen_disparar");
                imagen.src = "https://www.branding.news/wp-content/uploads/2018/05/deadpool-cover.jpg";
                casa.innerHTML = "¿Qué haces en mi casa?";
            }
            
            casa.onclick = Esta_es_mi_casa;
        </script>
      </body>
    </html>
    `;

// Creas el servidor con create server
const server = http.createServer( (request, response) => {
    console.log(request.url);
    // Cuando la petición sea la raíz regresa lo de siempre
    if (request.url == "/") {
        // Le dice al servidor que responda con contenido de html y de texto
        response.setHeader("Content-Type", "text/html");
        response.write(header);
        response.write(`
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
          `);
        response.write(footer);
        // Envía la respuesta del servidor
        response.end();
    } else if (request.url == "/wolverine" && request.method == "GET") {
        response.write(header);
        response.write(`
          <section class="section">
            <div class="container">
              <h1 id="title" class="title"> Envía un mensaje a nuestro bro Wolverine </h1>
              <form action="/wolverine" method="POST">
                <label class="label" for="titulo">Titulo de mensaje:</label>
                <input name="titulo" class="input" type="text" id="titulo"><br>
                <label class="label" for="mensaje">Mensaje para el broski:</label>
                <input name="mensaje" class="input" type="text" id="mensaje"><br><br>
                <input class="button is-success" type="submit" value="Enviar">
              </form>
              <figure>
                    <img id="imagen_disparar" src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/02/1484222978-deadpool.jpg?resize=1200:*">
                </figure>
            </div>
          </section>
        `);
        response.write(footer);
        response.end();
    } else if (request.url == "/wolverine" && request.method == "POST"){
        
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const titulo = datos_completos.split('&')[0].split('=')[1];
            console.log(titulo);
            const mensaje = datos_completos.split('&')[1].split('=')[1];
            console.log(mensaje);
            return response.end();
        });

    } else {
        // Regresas el error 404 (código de respuesta para recurso no encontrado)
        response.statusCode = 404;
        // Regresas el html que dice que no existe
        response.setHeader("Content-Type", "text/html");
        response.write(header);
        response.write(`
          <section class="section">
            <div class="container">
              <h1 id="title" class="title">Oops, no existe el enemigo que estas buscando</h1>
            </div>
          </section>
          `);
        response.write(footer);
          // Envías la respuesta del servidor
        response.end();
    }
});

// Para que el servidor este activo, hay que decirle que escuche peticiones en un puerto (3000)
server.listen(3000);