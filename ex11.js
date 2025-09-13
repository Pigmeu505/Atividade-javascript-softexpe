n1 = parseInt(prompt("Digite um numero:"))

meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

if (n1 <= 12){
    alert(meses[n1-1])
} else {
    alert("Numero invalido, escreva entre 1 e 12")
}
