const buscar_mayor_menor = (numeros) => {
    
    let obj = {};
    let mayor = numeros[0]; menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i]
        } else {
            if (numeros[i] < menor) {
                menor = numeros[i]
            }
        }
    }

    obj["mayor"] = mayor
    obj["menor"] = menor

    return obj;
}

let obj = buscar_mayor_menor([3,1,5,4,2]);
console.log(obj);