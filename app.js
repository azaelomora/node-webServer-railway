require('dotenv').config();
const express = require('express');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;

//* Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//TODO: Servir contenido estático
app.use(express.static('public'));

//* Controlador
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Azael Moreno',
        titulo: 'Curso de node',
    });
});


app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: ' Azael Moreno ',
        titulo: ' Curso de node',
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: ' Azael Moreno ',
        titulo: ' Curso de node',
    });
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Exmple app listening at http://localhost:${port}`)
});