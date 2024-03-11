const db = require('../util/database');

module.exports = class Wolverine_Message {

    // Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(titulo_1, mensaje_1, username_1) {
        this.titulo = titulo_1;
        this.mensaje = mensaje_1;
        this.username = username_1;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO Mensaje (titulo, mensaje, username) VALUES (?, ?, ?)',
            [this.titulo, this.mensaje, this.username]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    // Métodos estáticos se ejecuta sobre la clase, no un objeto de la clase
    static fetchAll() {
        return db.execute('SELECT * FROM Mensaje');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM Mensaje WHERE idMensaje=?', 
        [id]);
    }

    static fetch(id){
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

}