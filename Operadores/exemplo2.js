const temIdadePermitida = true;
const possuiIdentidade = false;
const temAutorizacaoDosPais = true;

//Exemplo 1: Operador E (&&) - Ambos precisam ser verdadeiros
const podeEntrarSozinho = temIdadePermitida && possuiIdentidade;
console.log("Pode entrar desacompanhado? " + podeEntrarSozinho);
//Saída: false 

//Exemplo 2: Operador OU (||) - Pelo menos um precisa ser verdadeiro
const possuiAcesso = podeEntrarSozinho || temAutorizacaoDosPais;
console.log("Possui autorização para o evento? " + possuiAcesso);
//Saída: true

//Exemplo 3: Operador NÃO/Negação (!) - Inverte o valor booleano
const sistemaEMManutecao = false;
const sistemaDisponivel = !sistemaEMManutecao;
console.log("O sistema está disponível? " + sistemaDisponivel);
//Saída: true