var readlineSync = require('readline-sync')
let altura = 0
let peso = 0

function entradaDados() {
    altura = readlineSync.questionFloat("Digite a altura: ")
    peso = readlineSync.questionFloat("Digite o peso: ")
}

function imc(alt, pe){
    return pe/(alt**2)
}

function principal() {
    entradaDados()
    let result = imc(altura,peso)
    console.log("O IMC é: " + result.toFixed(2))
}
principal()