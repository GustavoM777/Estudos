// -------- Filter --------------------

let pessoas = [
    {nome: 'Carlos', idade: 25 },
    {nome: 'Wesley', idade: 25 },
    {nome: 'Bruno', idade: 23 }
]

// let pessoasComIdadeDe25Anos = []
// for (let i=0; i < pessoas.length; i++) {
//     if(pessoas[i].idade === 25) {
//         pessoasComIdadeDe25Anos.push(pessoas[i])
//     }
// }
// console.log('pessoasComIdadeDe25Anos', pessoasComIdadeDe25Anos)

let pessoasComIdadeDe25Anos = pessoas.filter(function(pessoa){
    return pessoa.idade === 25
})

console.log('pessoasComIdadeDe25Anos 2', pessoasComIdadeDe25Anos)

// ---------------------- OU ------------------------------

let pessoasDeIdadeDe25Anos = pessoas.filter((pessoa) => pessoa.idade === 25 )

console.log('pessoasDeIdadeDe25Anos 3', pessoasDeIdadeDe25Anos)