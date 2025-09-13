idade = parseFloat(prompt("digite sua idade:"))

if (idade < 12) {
    alert("Classificação: Livre")
} else if (idade >= 12 && idade <= 14) {
    alert("Classificação: +12")
} else if (idade >= 15 && idade <= 17) {
    alert("Classificação: +15")
} else {
    alert("Classificação: +18")
}
