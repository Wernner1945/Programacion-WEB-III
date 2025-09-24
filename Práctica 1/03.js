const buscar_pares_impares = (numeros) => {
    
    let objeto = {
        pares:[],
        impares:[]
    };

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            objeto.pares.push(numeros[i])
        } else {
            objeto.impares.push(numeros[i]); 
        }
    }

    return objeto
}

let obj = buscar_pares_impares([1,2,3,4,5]);
console.log(obj);