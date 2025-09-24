let users = [];

/*

*********** ANIDAMIENTO DE CALLBACKS ***********

*/

//callback 1
function crear_email(x,y, callback) {
    const email =  x + y.toString() + "@gmail.com"
    callback(email)
}


//callback 2
function verificar_email(email, callback) {
    const esValido = email.includes("@") && email.includes(".")
    callback(esValido)
}

//callback 3
function devolver_email(email, callback) {
    let user = email.toUpperCase()
    callback(user)
}


//callback 4
function añadir_lista(email) {
    users.push(email.toLowerCase())
}

// Funcion principal
function registro(nombre, edad, callback_end) {
    crear_email(nombre, edad, (email) => {
        console.log("email creado >>> " + email)

        verificar_email(email, (esValido) => {
            console.log("verificacion de email: >>> " + esValido)

            if (esValido) {
                devolver_email(email, (emailFinal) => {
                    console.log("Email listo para añadir >>> " + email)
                    callback_end(emailFinal)
                })
            } else {
                console.log("Email inválido")
            }
            
        })
    })
}

let nombre = "leonardo"
let edad = 22

// ejecutando la funcion principal
registro(nombre, edad, añadir_lista)
console.log(users)


/*

*********** USANDO ASYNC/AWAIT ************

*/
function crear_email(x, y) {
    return new Promise((resolve) => {
        const email = x + y.toString() + "@gmail.com";
        resolve(email);
    });
}

function verificar_email(email) {
    return new Promise((resolve) => {
        const esValido = email.includes("@") && email.includes(".");
        resolve(esValido);
    });
}

function devolver_email(email) {
    return new Promise((resolve) => {
        let user = email;
        resolve(user);
    });
}

function añadir_lista(email) {
    users.push(email.toLowerCase());
}

async function registro(nombre, edad) {
    try {
        const email = await crear_email(nombre, edad);
        console.log("email creado >>> " + email);

        const esValido = await verificar_email(email);
        console.log("verificacion de email: >>> " + esValido);

        if (esValido) {
            const emailFinal = await devolver_email(email);
            console.log("Email listo para añadir >>> " + email);
            añadir_lista(emailFinal);
        } else {
            console.log("Email inválido");
        }
    } catch (error) {
        console.log("Error:", error);
    }
}

registro(nombre, edad);
console.log(users);