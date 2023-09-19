const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


// Controller // Rotas
app.get('/', (req, res) => {
  res.render('home', { message: 'Esta é a página home.' });
});

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Esta é a página de produtos' });
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});