const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || "2727";

// Cargamos el gestor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "pug");

// Cargamos ficheros estáticos
app.use(express.static(__dirname + '/static'));

app.get("/", (req, res) => {
    res.render('index', {titulo: 'hola'});
});

app.listen(PORT, () => {
    console.log(`Listening to requests on http://localhost:${PORT}`);
});
