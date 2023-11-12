const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


// Controller // Rotas
app.get('/', (req, res) => {
  res.render('home', { message: 'Esta é a página home.' });
});

app.get('/produto1', (req, res) => {
  res.render('produto1', { message: 'Esta é a primeira página de produto.' });
})

app.get('/produto2', (req, res) => {
  res.render('produto2', { message: 'Esta é a segunda página de produto.' });
})

app.get('/produto3', (req, res) => {
  res.render('produto3', { message: 'Esta é a terceira página de produto.' });
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});