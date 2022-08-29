function clicar() {
    var inicio = document.getElementById('init')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pass')
    var res = document.getElementById('res')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
       // window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f ) {
            // crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for(var c = i; c <= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }  
        }
    }   res.innerHTML += `\u{1F3C1}`
}

    
