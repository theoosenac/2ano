let idade = parseInt(prompt("Qual a sua idade?"));
let nome = prompt("Qual o seu nome?");
let PossuiCadastro = true;

if (idade < 12) {
    alert("Acesso negado: idade insuficiente para cadastro.");
}
else if (idade >= 12 && idade < 18 && PossuiCadastro === true) {
    alert("Acesso permitido com restrições para menores")
}
else if (idade >=18 || PossuiCadastro === true) {
    alert("Acesso completo permitido")
}
else {
    alert("Usuário precisa se cadastrar primeiro.")
}