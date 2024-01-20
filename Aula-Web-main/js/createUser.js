const form = document.querySelector(".formCreate");
const submitButton = form.querySelector(".btn");

function create() {
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Impede o envio do formulário

    const produto = document.getElementById("produto").value;
    const fabricante = document.getElementById("fabricante").value;
    const cidade = document.getElementById("cidade").value;

    const newUser = {
      produto,
      fabricante,
      cidade,
    };

    try {
      const user = await createUser(newUser);
      console.log("Novo produto criado:", user);
    } catch (error) {
      console.error("Erro ao criar produto:", error);
    }
  });
}

create();
