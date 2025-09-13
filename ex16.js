n = parseInt(prompt("Quantos números deseja informar?"))
numeros = []
soma = 0

for (i = 0; i < n; i++) {
    valor = parseFloat(prompt("Digite o " + (i+1) + "º número:"))
    numeros.push(valor)
    soma = soma + valor
}
media = soma / n

mensagem = "A média é: " + media + "\n"
mensagem += "Números maiores ou iguais à média:\n"

for (i = 0; i < numeros.length; i++) {
    if (numeros[i] >= media) {
        mensagem += numeros[i] + "\n"
    }
}
alert(mensagem)
