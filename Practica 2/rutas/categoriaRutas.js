import express from 'express'
import { mostrarCategorias, insertarCategoria, borrarTodo, mostrarCategoriaProductosId, actualizarCategoria, borrarProductosCategoria } from '../controladores/categoriaControlador.js'

const rutas = express.Router();

rutas.get('/', mostrarCategorias);           
rutas.post('/', insertarCategoria);          
rutas.delete('/', borrarTodo);               
rutas.delete('/:id', borrarProductosCategoria);
rutas.get('/:id', mostrarCategoriaProductosId); 
rutas.put('/:id', actualizarCategoria);

export default rutas;