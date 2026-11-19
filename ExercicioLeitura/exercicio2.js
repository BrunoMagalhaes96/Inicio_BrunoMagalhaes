const rls = require("readline-sync")
let n1 = 0
let n2 = 0

function leitura(){
    n1 = rls.questionFloat("Digite o primeiro número: ")
    n2 = rls.questionFloat("Digite o segundo número: ")
}

function media(num1, num2){
    return (num1 + num2) / 2
}

function principal(){
    leitura()
    let resposta = media(n1,n2)

    console.log(`O resultado da média é : ${resposta}`)
}
principal()

//Utilizado o comando no terminal: npm i readline-sync