// 'use strict'
// const frutas = 'https://www.fruityvice.com/#3';
// const criarCards = (frutas) => {

//     const card = document.createElement('div')
//     card.classList.add('card')

//     const imagem = document.createElement('img')
//     imagem.src = `./img/${frutas.imagem}`
//     imagem.alt = frutas.nome

//     const nome = document.createElement('h2')
//     nome.textContent = frutas.nome

//     const color = document.createElement('h3')
//     color.textContent = 'Cor: ${frutas.color}'

//     const family = document.createElement('h4')
//     family.textContent = 'Família: ${frutas.family}'

//     card.appendChild(imagem)
//     card.appendChild(nome)
//     card.appendChild(family)
//     card.appendChild(color)

//     return card
// }

// const mostrarCards = (frutas) => {
//     const cardContainer = document.getElementById('card-container')
//     const card = criarCards(frutas)
//     cardContainer.appendChild(card)

// }

// frutas.forEach(mostrarCards)