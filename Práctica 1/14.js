// PROMESA (original)
function obtenerUsuarioPromesa(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id: id, nombre: "Usuario " + id });
            } else {
                reject("ID inválido");
            }
        }, 1000);
    });
}

// USO CON PROMESA
obtenerUsuarioPromesa(1)
    .then(usuario => console.log(usuario))
    .catch(error => console.error(error));

// CONVERTIDO A CALLBACK
function obtenerUsuarioCallback(id, callback) {
    setTimeout(() => {
        if (id > 0) {
            callback(null, { id: id, nombre: "Usuario " + id });
        } else {
            callback("ID inválido", null);
        }
    }, 1000);
}

// USO CON CALLBACK
obtenerUsuarioCallback(1, (error, usuario) => {
    if (error) {
        console.error(error);
    } else {
        console.log(usuario);
    }

});
