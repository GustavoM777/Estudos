// -------- reduce --------------------

let ordens = [
    { cliente: 'Carlos', quantidade: 53 },
    { cliente: 'Wesley', quantidade: 85 },
    { cliente: 'Bruno', quantidade: 35 }
]

// let quantidadeDeOrdens = 0
// for (let i=0; i < ordens.length; i++) {
//     quantidadeDeOrdens += ordens[i].quantidade
//     // quantidadeDeOrdens = quantidadeDeOrdens + ordens[i].quantidade

// }
// console.log('quantidadeDeOrdens', quantidadeDeOrdens)

let quantidadeDeOrdens = ordens.reduce(function (somaDeOrdens, ordem) {
    // console.log('ordem', somaDeOrdens, ordem)
    return somaDeOrdens + ordem.quantidade
}, 0)

console.log('quantidadeDeOrdens 2', quantidadeDeOrdens)

// // // ---------------------- OU ------------------------------

let quantidadeOrdens = ordens.reduce( (somaDeOrdens, ordem) => somaDeOrdens + ordem.quantidade, 0)

console.log('quantidadeOrdens 3', quantidadeOrdens)