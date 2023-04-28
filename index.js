const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('./public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.htm');
});

app.post('/cadastrar', (req, res) => {
    const formData = req.body;
    console.log('Dados recebidos:', formData);
  
    // Simulando um processamento bem-sucedido
    const sucesso = true;
    
    if (sucesso) {
      // Resposta de sucesso
      res.json({ mensagem: 'Cadastro realizado com sucesso!' });
    } else {
      // Resposta de erro
      res.status(500).json({ mensagem: 'Erro ao realizar cadastro.' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});