const userList = document.getElementById("userList");

// Função para buscar e exibir a lista de usuários
async function deleteUserById() {
  try {
    users = await getUser();

    users.forEach((user) => {
      const listItem = document.createElement("div");
      listItem.classList.add("userItem");

      const userText = document.createElement("p");
      userText.innerHTML = `<span>Produto:</span> ${user.produto} <br> <span>Fabricante:</span> ${user.fabricante} <br><span>Cidade:</span> ${user.cidade}`;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Deletar";
      deleteButton.classList.add("deleteButton");
      deleteButton.addEventListener("click", () => deleteUser(user.id, user.produto));

      listItem.appendChild(userText);
      listItem.appendChild(deleteButton);
      userList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Erro ao obter a lista de usuários:", error);
  }
}

// Chama a função para buscar e exibir os usuários ao carregar a página
deleteUserById();
