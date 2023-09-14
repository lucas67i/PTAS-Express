const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


// Controller // Rotas
app.get('/', (req, res) => {
  res.render('home', { message: 'Esta é a página home.' });
});

app.get('/contatos', (req, res) => {
  res.render('contatos', { message: 'Esta é a página de contatos' });
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});