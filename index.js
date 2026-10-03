const express = require('express');
const app = express();
// Render asignará un puerto automáticamente, o usará el 3000 localmente
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('¡Hola Profesor! Este es mi ambiente efímero de prueba para la Actividad 2.3 implementado por [Tu Nombre/Matrícula]');
});

app.listen(port, () => {
    console.log(`Aplicación ejecutándose en el puerto ${port}`);
});