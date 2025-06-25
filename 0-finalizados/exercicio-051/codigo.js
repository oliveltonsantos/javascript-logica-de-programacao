const inputPreco = document.getElementById('preco')

// Atalho: permite "Enter" para adicionar
inputPreco.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionarProduto()
    }
})

const btnLimpar = document.querySelector('button.btnLimpar')
const resposta = document.querySelector('div.resposta')

let precosAdicionados = []


function adicionarProduto() {

    const preco = Number(inputPreco.value)

    if (isNaN(preco) || preco <= 0) {
        alert('Insira valores válidos!')
        return
    }

    if (precosAdicionados.length >= 8) {
        alert('Já foram adicionados 8 preços.')
        return
    }

    precosAdicionados.push(preco)

    resposta.innerHTML = `<p>R$ ${precosAdicionados.join(' | ')}</p>`

    inputPreco.value = ''
    inputPreco.focus()

}


function analisarPrecos() {
    if (precosAdicionados.length < 8) {
        alert('Primeiro adicione os 8 números.')
        return
    }

    /*  
        Inicializa as variáveis menorPreco e maiorPreco com o primeiro valor do array.
        Isso garante que a comparação que vem depois tenha um ponto de partida válido (ao invés de usar 0, Infinity, etc).
    */
    let menorPreco = precosAdicionados[0]
    let maiorPreco = precosAdicionados[0]

    /*
        Começa um laço for, iniciando i = 1 (já que índice 0 já foi usado na linha anterior).
        Vai percorrer todos os demais preços do array, até o final (i < length).
    */
    for (let contador = 1; contador < precosAdicionados.length; contador++) {
        // Verifica se o preço atual é menor que o menor atual.
        if (precosAdicionados[contador] < menorPreco) {
            menorPreco = precosAdicionados[contador]
        }
        // Verifica se o preço atual é maior que o maior atual.
        if (precosAdicionados[contador] > maiorPreco) {
            maiorPreco = precosAdicionados[contador]
        }
    }

    resposta.innerHTML = `<p>Menor preço ${menorPreco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} | Maior preço ${maiorPreco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>`

    btnLimpar.style.display = 'inline-block'

}


function limpar() {
    precosAdicionados.length = 0 // Limpa os números do array para começar outra análise
    inputPreco.value = ''
    resposta.innerHTML = ''
    inputPreco.focus()
    btnLimpar.style.display = 'none'
}