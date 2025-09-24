let n = 10

const suma = (x) => new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        if (x > 0) {
            resolve(x + 10)
        }
        reject("El numero inicial es negativo")
    },1000)
})

const resta = (x) => new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        if (x < 40) {
            resolve(x - 5)
        }
        reject("El numero es mayor a 40")
    },2000)
})

const multiplicacion = (x) => new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        if (x != 0) {
            resolve(x * 2)
        }
        reject("El numero es igual a cero")
    },3000)
})

const modulo = (x) => new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        if (x != 0) {
            resolve(100%x)
        }
        reject("No existe el modulo sobre 0")
    },4000)
})

suma(n)
.then((resp) => {
    console.log("promesa 1 ")
    console.log(resp);
    return resta(resp)
})
.then((resp) => {
    console.log("promesa 2 ")
    console.log(resp);
    return multiplicacion(resp)
})
.then((resp) => {
    console.log("promesa 3 ")
    console.log(resp);
    return modulo(resp)
})
.then((resp) => {
    console.log("promesa 4")
    console.log(resp);
})
.catch((error) => {
    console.log("¡ Error ! >>> " + error);
})