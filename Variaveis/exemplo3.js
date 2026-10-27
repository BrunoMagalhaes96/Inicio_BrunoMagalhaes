//Inicio do programa

//O estoque começa em 50 e vai diminuir, por isso usamos let
let estoqueCamisa = 50;
const precoUnitario = 49.90;

console.log("Estoque inicial: " + estoqueCamisa + " unidades.");

// Venda de 3 unidades realizada
let qtdaVendida = 3;

/*
O operador -= subtrai o valor atual dele mesmo
(estoqueCamisa = estoqueCamisa - qtdaVendida)
*/
estoqueCamisa -= qtdaVendida;

//Multiplicação para descobrir o faturamento
let valorVenda = qtdaVendida * precoUnitario;

console.log("--- Venda Realizada ---");
console.log("Camisetas restantes no estoque: " + estoqueCamisa);
console.log("Valor total faturado: R$ " + valorVenda.toFixed(2));

//Fim do programa