const inputNome = document.getElementById('nome')
const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnRecomeçar = document.querySelector('button.btnRecomeçar')
const resposta = document.querySelector('div.resposta')

let listaNomes = []

function adicionar() {
    const nome = inputNome.value

     if (nome.trim() === '') {
        alert('Insira um nome no campo abaixo.')
        inputNome.focus()
        return
    }

    const soLetras = /^[A-Za-zÀ-ÿ\s]+$/

    if (!soLetras.test(nome)) {
        alert('Digite nomes que tenham apenas letras e espaços.')
        return
    }

    listaNomes.push(nome)
    resposta.innerHTML = `Quantidade de nomes adicionados: ${listaNomes.length}`

    if (listaNomes.length >= 8) {
        let respostaFormatada = listaNomes.map((valor, indice) => `<p>[${indice}] - ${valor}</p>`).join(' ')
        resposta.innerHTML = respostaFormatada
        inputNome.disabled = true
        btnRecomeçar.style.display = 'inline-block'
        btnAdicionar.style.display = 'none'

    }

}


function recomecar() {
    listaNomes.length = 0
    inputNome.disabled = false
    inputNome.value = ''
    inputNome.focus()
    resposta.innerHTML = ''
    btnRecomeçar.style.display = 'none'
    btnAdicionar.style.display = 'inline-block'
}



