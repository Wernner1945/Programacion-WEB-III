import { db } from '../server/db.js'

// 1
export const verTodo = async() => {
    const [resultado] = await db.query(
        'SELECT * FROM categorias'
    );
    return resultado
}

export const limpiarTodo = async() => {
    const [resultado] = await db.query(
        'DELETE FROM categorias'
    )
    return resultado
}





// 2
export const registrarCategoria = async(categoria) => {

    const { nombre, descripcion } = categoria;
    const connection = await db.getConnection();

    try {

        const [resultado] = await connection.query(
            'INSERT INTO categorias (nombre, descripcion) VALUES (?,?)',
            [nombre, descripcion]
        );

        return {
            id: resultado.insertId,
            ...categoria
        }

    } finally {
        connection.release();
    }
}

// 3
export const obtenerProductosCategoriaId = async(id) => {
    const [resultado1] = await db.query(
        'SELECT * FROM categorias WHERE id = ?;',
        [id]
    );
    const [resultado2] = await db.query(
        'SELECT * FROM productos WHERE categoria_id = ?;', 
        [id]
    );
    return { categoria: resultado1[0], productos: resultado2 }; 
}



// 4
export const actualizarCategoriaId = async(id, categoria) => {
    const {nombre, descripcion} = categoria;
    const connection = await db.getConnection();
        
    try {
        
        // verificamos si existe el if
        const [categoriaExistente] = await connection.query(
            'SELECT id FROM categorias WHERE id = ?', [id]
        );
        
        if (categoriaExistente.length == 0) {
            return false
        }

        const [resultado] = await db.query(
            `UPDATE categorias SET nombre = ?, descripcion = ?, fecha_act = CURRENT_TIMESTAMP WHERE id = ?`,
            [nombre, descripcion,id]
        )
        
        return {
            mensaje: "Categoria actualizada",
        }


    } finally {
        connection.release();
    }

}

// 5

export const eliminarCategoriaProductos = async(id) => {

    const [categoriaEliminada] = await db.query(
            'DELETE FROM categorias WHERE id = ?', [id]
    )

    
    const [productosEliminados] = await db.query(
        'SELECT * FROM productos WHERE categoria_id = ?;', 
        [id]
    );
    return { 
        categoriaEliminada, productosEliminados
    }; 
}
