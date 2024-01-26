function cadastrarUsuario() {
  var username = document.getElementById('signupUsername').value;
  var email = document.getElementById('signupEmail').value;
  var password = document.getElementById('signupPassword').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  // Validar nome de usuário
  if (username.length < 3) {
      alert('O nome de usuário deve ter pelo menos 3 caracteres.');
      return false;
  }

  // Validar senha
  if (password !== confirmPassword) {
      alert('A senha e a confirmação de senha não coincidem');
      return false;
  }

  if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
      alert('A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.');
      return false;
  }

  // Validar e-mail
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Por favor, insira um endereço de e-mail válido.');
      return false;
  }

  // Verifica se o usuário já existe
  if (localStorage.getItem(username)) {
      alert('Nome de usuário já cadastrado');
      return false;
  }

  // Armazena os dados do usuário no localStorage
  localStorage.setItem(username, JSON.stringify({ username: username, email: email, password: password }));

  // Redireciona para a página createUser.html
  window.location.href = 'createUser.html';

  return false;
}
