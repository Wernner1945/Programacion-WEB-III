const es_palindromo = (cadena) => {
    let aux = "";
    for (let i = 0; i < cadena.length; i++) {
        aux = cadena[i] + aux;
    }

    return aux == cadena;
}

let resp_1 = es_palindromo("oruro");
console.log(resp_1);
let resp_2 = es_palindromo("hola");
console.log(resp_2);