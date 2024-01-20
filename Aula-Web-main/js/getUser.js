const userList = document.getElementById("userList");

// Função para buscar e exibir a lista de usuários
async function getAllUser() {
  users = await getUser();
  try {
    users.forEach((cadastro) => {
      const listItem = document.createElement("div");
      listItem.classList.add("userItem");

      const userText = document.createElement("p");
      userText.innerHTML = `<span>Produto:</span> ${cadastro.produto} <br> <span>Fabricante:</span> ${cadastro.fabricante}<br><span>Cidade:</span> ${cadastro.cidade}`;

      listItem.appendChild(userText);
      userList.appendChild(listItem);
      
    });
  } catch (error) {
    console.error("Erro ao obter a lista de usuários:", error);
  }
}
getAllUser();
