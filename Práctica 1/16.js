// CON PROMESAS (original)
function obtenerDatosUsuario(userId) {
    return fetch(`/api/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta HTTP: ' + response.status);
            }
            return response.json();
        })
        .then(user => {
            return fetch(`/api/posts/${user.id}`)
                .then(response => response.json())
                .then(posts => {
                    return {
                        usuario: user,
                        posts: posts
                    };
                });
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
            throw error;
        });
}

//CON ASYNC/AWAIT (migrado)
async function obtenerDatosUsuario(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) {
            throw new Error('Error en la respuesta HTTP: ' + response.status);
        }
        
        const user = await response.json();
        const postsResponse = await fetch(`/api/posts/${user.id}`);
        const posts = await postsResponse.json();
        
        return {
            usuario: user,
            posts: posts
        };
    } catch (error) {
        console.error('Error al obtener datos:', error);
        throw error;
    }
}

// USO (igual para ambas)
obtenerDatosUsuario(123)
    .then(datos => console.log(datos))

    .catch(error => console.error(error));
