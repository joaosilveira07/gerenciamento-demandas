// elementos da tela
const form = document.getElementById("form-login");
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");
const lembrar = document.getElementById("check");
const erroEmail = document.getElementById("erroEmail");
const erroSenha = document.getElementById("erroSenha");

const camposErro = [
    erroEmail,
    erroSenha
];

// função que mostra o erro correspondente ao usuário
function mostrarErro(elemento, mensagem){
    elemento.classList.remove("oculto");
    elemento.innerText = mensagem;
}
// função que limpa o erro, é utilizada toda vez que o usuário aperta em submit
function limparErro(){
    camposErro.forEach(function(campo){
        campo.classList.add("oculto");
    });
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    limparErro();

    const email = campoEmail.value.trim().toLowerCase();
    const senha = campoSenha.value;

    let formValido = true;

    // validação email
    if (email === ""){
        mostrarErro(erroEmail, "O email é obrigatório.");
        formValido = false;
    } else if (!campoEmail.checkValidity()) {
        mostrarErro(erroEmail, "Insira um email válido.");
        formValido = false;
    }

    // validação senha
    if (senha === ""){
        mostrarErro(erroSenha, "A senha é obrigatória.");
        formValido = false;
    } else if (senha.length < 8) {
        mostrarErro(erroSenha, "A senha deve conter pelo menos 8 caracteres.");
        formValido = false;
    } else if (!/\d/.test(senha)){
        mostrarErro(erroSenha, "A senha deve conter pelo menos um caractere númerico.");
        formValido = false;
    } else if (!/[^a-zA-Z0-9\s]/.test(senha)){
        mostrarErro(erroSenha, "A senha deve conter pelo menos um caractere especial.");
        formValido = false;
    }



    if (formValido){
        form.submit();
    }
});