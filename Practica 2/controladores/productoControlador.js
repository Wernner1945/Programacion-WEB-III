import { verTodoCategoria, registrarProducto, obtenerInfoProductoId, actualizarProductoId, incrementoDecrementoStock} from "../modelos/productoModelo.js";

export const mostrarProductosCategoria = async (req, res) => {
    try {
        const resultado = await verTodoCategoria();
        res.json(resultado)   
    } catch (error) {
        res.status(500).json(
            {
                error: error.message
            }
        )
    }
}

export const insertarProducto = async (req, res) => {
    try {
        const nuevoProducto = await registrarProducto(req.body)
        res.json(
            {
                mensaje: "Producto registrado con exito",
                resultado: nuevoProducto
            }
        )

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

export const mostrarInfoProductoId = async (req, res) => {
    try {
        const {id} = req.params
        const resultado = await obtenerInfoProductoId(id);

        if (resultado == false) {
            res.json({
                mensaje: "Producto inexistente"
            })
        } else {
            res.json({resultado})
        }

    } catch (error) {
        res.status(500).json({
            error: error.menssage
        })
    }
}

export const actualizarProducto = async (req, res) => {
    try {
        const {id} = req.params
        const resultado = await actualizarProductoId(id, req.body)
        if (resultado == false) {
            res.json({
                mensaje: "Producto inexistente"
            })
        } else {
            res.json(
                {
                    mensaje: "Producto actualizado"
                }
            )
        }

    } catch (error) {
        res.status(500).json(
            {
                error: error.message
            }
        )
    }
}
export const actualizarStockProductoId = async (req, res) => {
    try {
        const { id } = req.params;
        const { cantidad } = req.body;

        const respuesta = await incrementoDecrementoStock(id, cantidad);

        if (respuesta === false) {
            res.json({
                mensaje: "No existe el producto"
            });
        } else {
            res.json({
                mensaje: "Stock actualizado",
                stock: respuesta.stock
            });
        }

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
