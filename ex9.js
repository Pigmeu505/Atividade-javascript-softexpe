n1 = parseFloat(prompt("Digite a 1ª nota:"));
n2 = parseFloat(prompt("Digite a 2ª nota:"));
n3 = parseFloat(prompt("Digite a 3ª nota:"));
n4 = parseFloat(prompt("Digite a 4ª nota:"));

m = (n1 + n2 + n3 + n4) / 4;

if (m >= 7) {
    console.log("aprovado. media:", m);
} else if (media >= 5) {
    console.log("recuperação. media:", m);
} else {
    console.log("reprovado. media:", m);
}
