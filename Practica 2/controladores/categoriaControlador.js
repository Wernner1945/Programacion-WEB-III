import { verTodo , limpiarTodo, registrarCategoria, obtenerProductosCategoriaId, actualizarCategoriaId, eliminarCategoriaProductos  } from "../modelos/categoriaModelo.js";


export const mostrarCategorias = async (req, res) => {
    try {
        const resultado = await verTodo();
        res.json(resultado)        
    } catch (error) {
        res.status(500).json(
            {
                error: error.message
            }
        )
    }
}

export const borrarTodo = async (req, res) => {
    try {
        const resultado = await limpiarTodo()
        res.json({mensaje: "Tabla Limpiada"})
        
    } catch (error) {
        res.status(500).json(
            {
                error: error.message
            }
        )
    }
}
export const insertarCategoria = async (req, res) => {
    try {
        const resultado = await registrarCategoria(req.body);
        res.json(
            {
                mensaje: "Insertado con exito",
                resultado: resultado
            }
        );

    } catch (error) {
        res.status(500).json(
            {
                error: error.message
            }
        )
    }
}

export const mostrarCategoriaProductosId = async (req, res) => {
    try {
        const {categoria, productos} = await obtenerProductosCategoriaId(req.params.id)
        res.json({categoria, productos})

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

export const actualizarCategoria = async (req, res) => {
    try {
        const {id} = req.params;

        const resultado = await actualizarCategoriaId(id, req.body)

        if (resultado == false) {
            res.json(
                {
                    mensaje: "ID no encontrada"
                }
            )
        } else {
            res.json(resultado)
        }

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

export const borrarProductosCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const {categoriaEliminada, productosEliminados} = await eliminarCategoriaProductos(id)
        res.json({
            mensaje: "Categoria y sus productos eliminados",
            categoria: categoriaEliminada,
            productos: productosEliminados
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}