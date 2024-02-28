const prompt = require("prompt-sync")()

function getUserInfo(){
    let weight = prompt("Digite seu peso: ")
    let height = prompt("Digite sua altura: ")

    return pessoa = {
        weight: weight,
        height: height
    }
}

function calcImc(pesoINformado=0, alturaInformado=0){
    return pesoINformado / alturaInformado**2
}

function main(){
    // guarda o objeto do getUserInfor
    let userData = getUserInfo()
    // guarda somente o peso
    let weight = userData.weight
    // guarda somente a altura
    let height = userData.height
    // guarda o resultado
    let resulImc = calcImc(peso,altura)

    if(resulImc < 18){
        console.log(`Seu Imc é ${resulImc} e você está abaixo do peso`)}
        else if(resulImc > 18 && resulImc < 23.9){
            console.log(`Seu Imc é ${resulImc} e você está normal`)
        }
}
main()

//function imprimir(nome){ console.log(nome) }
// Isso é o mesmo de cima
//const imprimir = nome => console.log("ola")