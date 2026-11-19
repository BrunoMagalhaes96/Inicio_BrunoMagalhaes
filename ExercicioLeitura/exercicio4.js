const rls = require("readline-sync")
let base = 0
let altura = 0

function leitura(){
    base = rls.questionFloat("Digite a base do retângulo: ")
    altura = rls.questionFloat("Digite a altura do retângulo: ")
}

function perimetro(num1, num2){
    return 2*(num1 + num2)
}

function principal(){
    leitura()
    let resposta = perimetro(base, altura)

    console.log(`O resultado do perímetro é : ${resposta}`)
}
principal()

//Utilizado o comando no terminal: npm i readline-sync