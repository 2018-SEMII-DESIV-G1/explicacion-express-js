// imports
const express = require('express');
const app = express();
const pug = require('pug');
const port = 3000;

//engine
app.set('view engine', pug);
app.set('views', './views');

// urls
app.get('/1', (req, res) => res.send('hola mundo'));
app.get('/2', function(req, res){
    res.send('hola mundo 2');
});
app.get('/3', (req,res) => res.render('ejemplo.pug'));
app.get('/4', (req,res) => res.render('ejemplo2.pug'));


// listen
app.listen(port, () => console.log(`Estoy corriendo en ${port}`));