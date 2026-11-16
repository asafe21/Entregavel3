var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Configurar body-parser
app.use(bodyParser.json());

// Funções matemáticas
function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) {
    return 'Erro: divisão por zero';
  }
  return a / b;
}

// Rota GET de teste
app.get('/', function(req, res) {
  res.send('Servidor rodando! Acesse /soma, /subtracao, /multiplicacao ou /divisao via POST');
});

// Rota POST para soma
app.post('/soma', function(req, res) {
  var body = req.body;
  var resultado = soma(body.a, body.b);
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

// Rota POST para subtração
app.post('/subtracao', function(req, res) {
  var body = req.body;
  var resultado = subtracao(body.a, body.b);
  res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`);
});

// Rota POST para multiplicação
app.post('/multiplicacao', function(req, res) {
  var body = req.body;
  var resultado = multiplicacao(body.a, body.b);
  res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
});

// Rota POST para divisão
app.post('/divisao', function(req, res) {
  var body = req.body;
  var resultado = divisao(body.a, body.b);
  res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado}`);
});

var port = 3001;

// Iniciando o servidor
app.listen(port, function() {
  console.log(`Servidor escutando na porta http://localhost:${port}/`);
});