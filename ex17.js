produtos = []
total = 0
qtdProdutos = parseInt(prompt("Quantos produtos deseja comprar?"))

for (i = 0; i < qtdProdutos; i++) {
    descricao = prompt("Digite o produto " + (i+1) + ":")
    preco = parseFloat(prompt("Digite o valor do produto:"))
    quantidade = parseInt(prompt("Digite a quantidade comprada:"))

    subtotal = preco * quantidade

    produtos.push({
        desc: descricao,
        preco: preco,
        qtd: quantidade,
        sub: subtotal
    })

    total = total + subtotal
}

cupom = "=== CUPOM DA VENDA ===\n"

for (i = 0; i < produtos.length; i++) {
    cupom += produtos[i].desc + " - R$" + produtos[i].preco.toFixed(2) + 
             " x " + produtos[i].qtd + 
             " = R$" + produtos[i].sub.toFixed(2) + "\n"
}

cupom += "----------------------\n"
cupom += "TOTAL: R$" + total.toFixed(2)

alert(cupom)
