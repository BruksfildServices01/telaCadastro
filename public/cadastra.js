document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário por padrão
  
    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    // Cria um objeto com os dados do formulário
    const formData = {
      nome: nome,
      idade: idade,
      email: email,
      senha: senha
    };
  
    // Realiza a requisição POST para o backend
    fetch('/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      // Lida com a resposta do servidor
      if (response.ok) {
        console.log('Cadastro realizado com sucesso!');
        // Faça algo após o cadastro ser bem-sucedido, como redirecionar para outra página
      } else {
        console.error('Erro ao realizar cadastro.');
      }
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
    });
  });
  