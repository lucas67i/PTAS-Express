// Importa o módulo express e cria uma instância do aplicativo
const express = require('express');
const app = express();

// Define a porta do servidor
const port = 3000;

// Configura o mecanismo de visualização para EJS e configura a pasta 'public' como estática
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Dados dos produtos, uma lista de objetos representando produtos com detalhes
const produtos = [
  {
    id: 1,
    productName: 'Monitor Gamer LG Ultra Gear 27',
    imagePath: 'monitor1.jpg',
    productDescription: 'O Monitor Gamer LG Ultra Gear 27 oferece uma experiência de jogo excepcional com 240Hz de taxa de atualização, tecnologia IPS para cores vibrantes e design gamer com iluminação RGB personalizável.',
    productPrice: 'R$ 1800,00',
  },
  {
    id: 2,
    productName: 'Monitor Gamer Zowie XL2546K',
    imagePath: 'monitor2.jpg',
    productDescription: 'O Monitor Gamer Zowie XL2546K proporciona uma experiência de jogo de alta qualidade com sua taxa de atualização de 240Hz, tecnologia DyAc+ para clareza em movimentos rápidos e design ajustável para competitividade.',
    productPrice: 'R$ 3000,00',
  },
  {
    id: 3,
    productName: 'Alienware 500Hz Gaming Monitor - AW2524H',
    imagePath: 'monitor3.png',
    productDescription: 'O Alienware 500Hz Gaming Monitor - AW2524H oferece uma experiência de jogo superior com incríveis 500Hz de taxa de atualização, cores vibrantes, resolução aprimorada e design futurista para os entusiastas de jogos.',
    productPrice: 'R$ 7000,00',
  },
];

// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('home', { produtos }); // Renderiza a página index.ejs com a lista de produtos
});

// Rota para exibir detalhes de um produto específico
app.get('/produto', (req, res) => {
  const id = req.query.id; // Obtém o ID do parâmetro da URL
  const produto = buscarProdutoPorId(id); // Busca o produto pelo ID
  if (produto) {
    res.render('produto', { produto }); // Renderiza a página do produto com os detalhes
  } else {
    res.status(404).send('Produto não encontrado'); // Se o produto não for encontrado, retorna um erro 404
  }
});

// Função para buscar o produto por ID
function buscarProdutoPorId(id) {
  return produtos.find(produto => produto.id == id); // Encontra o produto com base no ID fornecido
}

// Controladores e rotas adicionais
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

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});