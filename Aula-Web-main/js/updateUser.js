const userList = document.getElementById("userList");
const updateFormContainer = document.getElementById("updateFormContainer");

// Função para buscar e exibir a lista de usuários
async function UpdateUserById() {
  try {
    users = await getUser();

    users.forEach((user) => {
      const listItem = document.createElement("div");
      listItem.classList.add("userItem");

      const userText = document.createElement("p");
      userText.innerHTML = `<span>Produto:</span> ${user.produto} <br> <span>Fabricante:</span> ${user.fabricante} <br><span>Cidade:</span> ${user.cidade}`;

      const SendButton = document.createElement("button");
      SendButton.textContent = "Atualizar";
      SendButton.classList.add("updateButton");
      SendButton.addEventListener("click", () => {
        const modal = document.getElementById("demo-modal"); // Access the first element with the "modal" class
        modal.style.visibility = "visible"; // Set the "visibility" style property to "visible"
        modal.style.opacity = "1"; // Set the "opacity" style property to "1"
        openUpdateForm(user.id, user.produto, user.fabricante, user.cidade);
      });

      listItem.appendChild(userText);
      listItem.appendChild(SendButton);
      userList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Erro ao obter a lista de usuários:", error);
  }
}

async function openUpdateForm(userId, produto, fabricante, cidade) {
  const updateFormHTML = `
    <form id="updateForm" class="formUpdate">
      <h2>Atualizar Usuário</h2>
      <label for="produto">Produto</label>
      <input type="produto" placeholder="Digite o novo Produto" id="produto" value="${produto}" required>
      <label for="fabricante">Fabricante</label>
      <input type="text" placeholder="Digite o novo fabricante" id="fabricante" value="${fabricante}" required>
      <label for="cidade">Cidade</label>
      <input type="text" placeholder="Digite a nova cidade" id="cidade" value="${cidade}" required>
      <button type="submit" class="btn">Atualizar</button>
    </form>
  `;

  updateFormContainer.innerHTML = updateFormHTML;

  const updateForm = document.getElementById("updateForm");

  updateForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const produto = document.getElementById("produto").value;
    const fabricante = document.getElementById("fabricante").value;
    const cidade = document.getElementById("cidade").value;

    const newUser = {
      produto,
      fabricante,
      cidade,
    };

    await updateUser(userId, newUser);
  });
}

// Chama a função para buscar e exibir os usuários ao carregar a página
UpdateUserById();
