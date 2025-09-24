const miPromesa = new Promise((resolve) => {
    setTimeout(() => {
        const callback = mi_callback()
        resolve(callback);
    }, 2000);
});

const mi_callback = () => {
    return "Callback ejecutado de forma exitosa";
}

miPromesa.then((resp) => {
    console.log(resp);
})