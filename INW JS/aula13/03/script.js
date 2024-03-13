const nomes = ["jose diogo", "diego leite", "gustavo castanha", "antonio di cillo"]
const nomesComplexo = [{nome : "jose diogo", idade : 16}, {nome : "diego leite", idade : 17}]
//mostrando um nome da lista nomes do arry
//console.log(nomes)
//console.log(nomes[0])
//console.log(nomes[2])

//let nome1 = nomes[0]
//let nome2 = nomes[1]
//let nome3 = nomes[2]
    //em vez disso
//const [nome1, nome2, nome3, nome4] = nomes
//console.log(nome1)

//guardar um valor e o resto m outro arry
//const [nome1, ... resto] = nomes
//console.log(resto)

//mudar valor dentro da arry
//nomes[1] = "Munhoz"
//console.log(nomes[1])

//add em um novo item no arry
//nomes.push('Novo jogador')
//console.log(nomes[4])

//pra deletar o ultimo valor
//nomes.pop()

//para ver o tamanho do arry
//console.log(nomes.length)

//mostrar os nomes do arry cada um por loop
/* for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
} */
    //forma mais compacta
/* nomes.forEach(function(meuItem){
    console.log(meuItem)
}) */
    //forma mais compacta
/* nomes.forEach(meuItem =>{
    console.log("Ola " + meuItem)
}) */

/* nomes.filter(meuItem =>{
    console.log(meuItem === "jose diogo")
})     filtrar aquele

nomes.filter((meuItem) =>{
    console.log(meuItem.includes('a'))
})     filtrar os nomes que possui a

nomes.filter((meuItem) =>{
    console.log(element.idade > 17)
})
*/