num1 = parseFloat(prompt("Digite o 1º número:"))
num2 = parseFloat(prompt("Digite o 2º número:"))
num3 = parseFloat(prompt("Digite o 3º número:"))

if (num1 >= num2 && num1 >= num3) {
    maior = num1
} else if (num2 >= num1 && num2 >= num3) {
    maior = num2
} else {
    maior = num3
}

alert("O maior número é: " + maior)
