const contar_vocales = (texto) => {

    let objeto = {};
    let vocales = "aeiou";
    
    for (let i = 0; i < vocales.length; i++) {

        let c = 0; // contador de vocales repetidas
        
        for (j = 0; j < texto.length; j++) {
            if (vocales[i] === texto[j]) {
                c++;
            }
        }

        if (c >= 0) {
            objeto[vocales[i]] = c;
        }
    }

    return objeto;
}

let obj = contar_vocales("leonardo");
console.log(obj);