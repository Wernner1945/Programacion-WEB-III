import express from 'express'
import categoriaRutas from './rutas/categoriaRutas.js'
import productoRutas from './rutas/productoRutas.js'

const app = express();

app.use(express.json());
app.use('/categorias', categoriaRutas);
app.use('/productos', productoRutas)


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`)
})
