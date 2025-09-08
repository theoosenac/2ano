let peso = parseFloat(prompt("Qual o seu peso? (em kg)"));
let altura = parseFloat(prompt("Qual a sua altura? (em metros)"));
let imc = peso / (altura * altura);

alert("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
    alert("Abaixo do peso");
}
else if (imc >= 18.5 && imc < 24.9) {
    alert("Peso normal");
}
else if (imc >= 25 && imc < 29.9) {
    alert("Sobrepeso");
}
else if (imc >= 30 && imc < 34.9) {
    alert("Obesidade grau 1");
}
else if (imc >= 35 && imc < 39.9) {
    alert("Obesidade grau 2");
}
else {
    alert("Obesidade grau 3");
}