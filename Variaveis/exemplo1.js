//Inicio do programa

const notaA1 = 8.5;
var notaA2 = 7.0;
let notaA3 = 9.0;

//Armazenando a média em uma variável sem o const, var ou let
//Os parênteses garantem que a soma seja feita antes da divisão
mediaFinal = (notaA1 + notaA2 + notaA3) / 3;

// Exibindo o resultado formatado com 2 casas decimais (.toFixed)
console.log("A média final do aluno é: " + mediaFinal.toFixed(2));

//Final do programa