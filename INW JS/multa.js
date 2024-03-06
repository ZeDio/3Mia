const prompt = require('prompt-sync')()

function getUserInfo(){
    let velo = prompt("Digite a velocidade do carro: ")
    return velo
}

function calcMulta(velocal = 0){
    return (velocal - 60)*100
}

function main(){
    let velo = parseInt(getUserInfo())

    if(velo >= 60){
        let resulMulta = calcMulta(velo)
        console.log(`Esse veiculo vai levar a multa de R$${resulMulta}`)}
    else{
        console.log(`Esse veiculo não passou acima da velocidade`)
    }
}
main()