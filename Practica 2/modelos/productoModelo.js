import { db } from '../server/db.js'



// 6
export const registrarProducto = async(producto) => {

    const { nombre, precio, stock, categoria_id } = producto;

    const connection = await db.getConnection();

    try {

        const [resultado] = await connection.query(
            'INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES (?,?,?,?)',
            [nombre, precio, stock, categoria_id]
        );

        return {
            producto: resultado
        }

    } finally {
        connection.release();
    }
}

//7 

export const verTodoCategoria = async() => {
    
    const [productos] = await db.query(
        `SELECT productos.*, categorias.nombre AS categoria
        FROM productos
        JOIN categorias ON productos.categoria_id = categorias.id`
    );
    return productos
}


// 8
export const obtenerInfoProductoId = async(id) => {
    const [producto] = await db.query(
        `SELECT productos.*, categorias.nombre AS categoria
        FROM productos
        JOIN categorias ON productos.categoria_id = categorias.id
        WHERE productos.id = ?`, [id]
    )
    if (producto.length == 0) {
        return false
    }
    return producto
}


// 9
export const actualizarProductoId = async(id, datos) => {
    const { nombre, precio, stock, categoria_id } = datos;
    const connection = await db.getConnection();

    try {
        const [productoExistente] = await connection.query(
            'SELECT id FROM productos WHERE id = ?', [id]
        );

        if (productoExistente.length === 0) {
            return false;
        }

        const [resultado] = await connection.query(
            `UPDATE productos 
            SET nombre = ?, precio = ?, stock = ?, categoria_id = ?, fecha_act = CURRENT_TIMESTAMP 
            WHERE id = ?`,
            [nombre, precio, stock, categoria_id, id]
        );

        return {
            
            producto: resultado

        };

    } finally {
        connection.release();
    }
}


// 10
export const incrementoDecrementoStock = async (id, cantidad) => {
    const connection = await db.getConnection();

    try {
        const [productoExistente] = await connection.query(
            'SELECT stock FROM productos WHERE id = ?', [id]
        );

        if (productoExistente.length === 0) {
            return false;
        }

        const stockActual = productoExistente[0].stock;
        const nuevoStock = stockActual + cantidad;

        await connection.query(
            'UPDATE productos SET stock = ?, fecha_act = CURRENT_TIMESTAMP WHERE id = ?',
            [nuevoStock, id]
        );

        return { stock: nuevoStock };

    } finally {
        connection.release();
    }
};
