s = 0;

for (i = 1;; i++) {
  qtd = prompt("digite a quantidade do produto " + i + " (vazio para encerrar):")
  if (!qtd) break
  valor = prompt("digite o valor unitário do produto " + i + ":")
  if (!valor) break
  s += Number(qtd) * Number(valor)
}

alert("Total da compra: R$ " + s.toFixed(2))
