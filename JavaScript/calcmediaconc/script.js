let notaum = Number(prompt("Digite a primeira nota(0 a 10):"));
let notadois = Number(prompt("Digite a segunda nota(0 a 10):"));
let media = (notaum + notadois) / 2;
let arredondar = Math.round(media);
let letra;

switch (Math.floor(arredondar)) {
    case 0:
    case 1:
    case 2:
        letra = "E";
        break;
    case 3:
    case 4:
        letra = "D";
        break;
    case 5:
    case 6:
        letra = "C";
        break;
    case 7:
    case 8:
        letra = "B";
        break;
    case 9:
    case 10:
        letra = "A";
        break;
    default:
        letra = "Média inválida";
}

alert("A média é: " + media.toFixed(2) + "\nE o conceito é: " + letra);
