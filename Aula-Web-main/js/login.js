function logarUsuario() {
  var username = document.getElementById('loginUsername').value;
  var password = document.getElementById('loginPassword').value;

  // Verifica se o usuário existe
  var userData = localStorage.getItem(username);

  if (!userData) {
      alert('Nome de usuário não encontrado');
      return false;
  }

  // Converte os dados do usuário de JSON para objeto
  userData = JSON.parse(userData);

  // Verifica a senha
  if (userData.password !== password) {
      alert('Senha incorreta');
      return false;
  }

  // Redireciona para a página createUser.html
  window.location.href = 'createUser.html';

  return false;
}
