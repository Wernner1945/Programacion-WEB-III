const  invertir_cadena = (texto) => {
    let cadena_aux = "";
    for (let i = 0; i < texto.length; i++) {
        cadena_aux = texto[i] + cadena_aux;
    }

    return cadena_aux
}

let cad = invertir_cadena("abcd");
console.log(cad);