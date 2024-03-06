const bnt1 = document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes')

bnt1.addEventListener('click', function clicar(){
    const valorDigitado = document.querySelector('#filmeInput').value
    // Cria um alert pra pg
    window.alert('Item add a lista')
    //cria o elemento li
    const itemlista = document.createElement('li')
    //add o li na lista
    listaFilmes.append(itemlista)
    //adiciona o contudo ao li
    itemlista.innerHTML = valorDigitado
    //muda o css do item
    itemlista.style.backgroundColor = 'red'
    //adiciona uma classe ao item
    itemlista.classList.add(fundo-azul)
})