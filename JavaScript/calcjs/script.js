let nome = prompt("Qual o seu nome?");
let distancia = parseInt(prompt("Qual a distância em km?"));
let velocidade = parseInt(prompt("Qual a velocidade em km/h?"));
let consumo = parseInt(prompt("Qual o consumo do carro em km/l?"));
let gasolina = parseInt(prompt("Qual o preço da gasolina por litro?"));

alert("Olá " + nome + ", o tempo estimado da sua viagem é de " + distancia / velocidade + " horas.")
alert("Será necessário " + distancia / consumo + " litros de gasolina.")
alert("O custo total da viagem será de R$ " + (distancia / consumo) * gasolina + ".")