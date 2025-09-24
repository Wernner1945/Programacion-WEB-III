const mi_promesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Mensaje enviado exitosamente")
    }, 3000);
})

mi_promesa
.then((resp) => {
    console.log(resp)
}).finally(() => {
    console.log("seguiremos programando")
})