const produto = "Notebook";
const preco = 3500.00;

//concatenando
resumo = "O preço do " + produto + " é R$ " + preco;
console.log(resumo);

//interpolação moderna com substituição direta via crase e ${}
resumo = `O valor do ${produto} é R$ ${preco.toFixed(2)}.`;
console.log(resumo);
//Saída: O valor do Notebook é R$ 3500.00.