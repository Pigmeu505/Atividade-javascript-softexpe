n = parseInt(prompt("Digite um número para ver a tabuada:"))
console.log("Tabuada do " + n + ":")
x = 1
while (x <= 10) {
    console.log(n + " x " + x + " = " + (n * x));
    x++
}
