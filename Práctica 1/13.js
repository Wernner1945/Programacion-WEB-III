// CON PROMESAS ANIDADAS (Promise Hell)
function calcularOperacionesComplejas(numero) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero * 2);
        }, 1000);
    })
    .then(resultado => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(resultado + 10);
            }, 500);
        })
        .then(resultado => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(resultado * 3);
                }, 800);
            })
            .then(resultado => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(resultado - 5);
                    }, 300);
                })
                .then(resultado => {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve(resultado / 2);
                        }, 600);
                    });
                });
            });
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// CON ASYNC/AWAIT (Código limpio)
function esperar(ms, valor) {
    return new Promise(resolve => setTimeout(() => resolve(valor), ms));
}

async function calcularOperacionesComplejas(numero) {
    try {
        let resultado = await esperar(1000, numero * 2);
        resultado = await esperar(500, resultado + 10);
        resultado = await esperar(800, resultado * 3);
        resultado = await esperar(300, resultado - 5);
        resultado = await esperar(600, resultado / 2);
        
        return resultado;
    } catch (error) {
        console.error('Error:', error);
    }
}

// USO
calcularOperacionesComplejas(5).then(resultado => {
    console.log('Resultado final:', resultado); // ((5*2 + 10) * 3 - 5) / 2 = 12.5

});
