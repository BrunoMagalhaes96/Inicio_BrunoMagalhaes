//Cálculo de desconto

//Entrada de dados
const preco = 34.99
const desconto = 0.15
//Processamento
let valDesconto = preco * desconto
let novoValor = preco - valDesconto
console.log(`O valor do produto com desconto é: R$:${novoValor.toFixed(2)}`)