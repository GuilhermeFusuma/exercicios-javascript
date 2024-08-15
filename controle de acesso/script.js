function verificarIdade() {
    const idade = parseInt(document.getElementById("idade").value);

    if(idade >= 18) {
        alert("Você é maior de idade e tem permissão para entrar no evento.");
    }

    else {
        alert("Você é menor de idade e não tem permissão para entrar no evento.");
    }
}