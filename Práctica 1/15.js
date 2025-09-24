// CALLBACK (original)
function leerArchivoCallback(nombreArchivo, callback) {
    setTimeout(() => {
        if (nombreArchivo === "datos.txt") {
            callback(null, "Contenido del archivo");
        } else {
            callback("Archivo no encontrado", null);
        }
    }, 1000);
}

// USO CON CALLBACK
leerArchivoCallback("datos.txt", (error, contenido) => {
    if (error) {
        console.error(error);
    } else {
        console.log(contenido);
    }
});

// CONVERTIDO A PROMESA
function leerArchivoPromesa(nombreArchivo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nombreArchivo === "datos.txt") {
                resolve("Contenido del archivo");
            } else {
                reject("Archivo no encontrado");
            }
        }, 1000);
    });
}

// USO CON PROMESA
leerArchivoPromesa("datos.txt")
    .then(contenido => console.log(contenido))

    .catch(error => console.error(error));
