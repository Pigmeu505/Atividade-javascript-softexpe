/*c = Number(prompt("Digite o capital inicial:"))
m = Number(prompt("Digite o número de meses:"))
t = Number(prompt("Digite a taxa de rentabilidade mensal (%):")) / 100

mont = c * (1 + t) ** m

alert(
  "capital inicial: R$ " + c.toFixed(2) +
  "\nmeses aplicados: " + m +
  "\ntaxa de rentabilidade: " + (t * 100).toFixed(2) + "% ao mês" +
  "\ncapital final: R$ " + mont.toFixed(2)
);*/

i = parseFloat(prompt("digite o capital inicial:"))
m = parseFloat(prompt("digite o número de meses:"))
t = parseFloat(prompt("digite a taxa ao mes:"))

calc = i
for (x = 1; x <= m; x++){
    calc = (1 + t / 100)
    console.log("mês " + x + ": R$ " + calc.toFixed(2));
}

alert("Valor final após " + m + " meses: R$ " + calc.toFixed(2))
