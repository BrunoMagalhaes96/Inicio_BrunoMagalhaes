const precoProduto = 100;
const desconto = 15;
const frete = 20;

const precoComDesconto = precoProduto - desconto;
const precoFinal = precoComDesconto + frete;
const parcelas = precoFinal / 2;

console.log("Preço final faturado: R$ " + precoFinal);
//Saída: 105

console.log("Valor de cada parcela: R$ " + parcelas);
//Saída: 52.5

//Operadores Especiais: Módulo (Resto) e Exponenciação
const numeroAlvo = 15;
const restoDivisão = numeroAlvo % 2;
//resto da devisão de 15 por 2

const areaQuadrada = 5 ** 2;
//5 elevado ao quadrado (5x5)

console.log("Resto da divisão de 15 por 2: " + restoDivisão);
//Saída: 1

console.log("Resultado de 5 elevado ao quadrado: " + areaQuadrada);
//Saída: 25