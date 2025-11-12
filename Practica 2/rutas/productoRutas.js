import express from 'express'
import { mostrarProductosCategoria , insertarProducto, mostrarInfoProductoId, actualizarProducto, actualizarStockProductoId} from '../controladores/productoControlador.js'

const rutas = express.Router();

rutas.get('/', mostrarProductosCategoria);
rutas.get('/:id', mostrarInfoProductoId);
rutas.post('/', insertarProducto);
rutas.put('/:id', actualizarProducto);
rutas.patch('/:id/stock', actualizarStockProductoId);

export default rutas;