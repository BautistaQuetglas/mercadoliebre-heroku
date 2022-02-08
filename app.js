const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
})
app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname,'/views/register.html'))
})
app.post('/registro', (req, res) => {
    res.redirect('/');
});
app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname,'/views/login.html'))
})
app.post('/ingreso', (req, res) => {
    res.redirect('/');
});

app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor corriendo en el puerto 3000')
})