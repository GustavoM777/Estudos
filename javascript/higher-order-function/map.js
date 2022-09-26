// -------- Map --------------------

let pessoas = [
    {nome: 'Carlos', idade: 25 },
    {nome: 'Wesley', idade: 25 },
    {nome: 'Bruno', idade: 23 }
]

// let nomeDasPessoas = []
// for (let i=0; i < pessoas.length; i++) {
//     nomeDasPessoas.push(pessoas[i].nome)

// }
// console.log('nomeDasPessoas', nomeDasPessoas)

let nomeDasPessoas = pessoas.map(function(pessoa){
    return pessoa.nome
})

console.log('nomeDasPessoas 2', nomeDasPessoas)

// // ---------------------- OU ------------------------------

let nomeDePessoas = pessoas.map((pessoa) => pessoa.nome )

console.log('nomeDePessoas 3', nomeDePessoas)