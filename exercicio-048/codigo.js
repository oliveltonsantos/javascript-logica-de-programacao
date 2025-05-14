const numeros = [] // Cria um array para armazenar os números

const inputNumero = document.getElementById('numero')

// Atalho: permite Enter para adicionar
inputNumero.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionarNumero()
    }
})

const resposta = document.querySelector('div.resposta')

// Função para adicionar os números ao array
function adicionarNumero() {
    const valor = Number(inputNumero.value)

    if (isNaN(valor)) {
        alert('Digite um número válido!')
        return
    }

    // Verifica se já foram adicionados 7 números ao array
    if (numeros.length >= 7) {
        alert('Você já adicionou 7 números.')
        return
    }

    // O .push() adiciona o número no final do array
    numeros.push(valor)

    inputNumero.value = ''
    inputNumero.focus()

    // O .join(' , ') transforma o array em uma string, separando os números por vírgula e espaço
    resposta.innerHTML = `<p>Números adicionados: ${numeros.join(' , ')}</p>`

}

// Função para somar os números do array
function somarNumeros() {
    if (numeros.length < 7) {
        alert('Adicione 7 números antes de somar.')
        return
    }

    let soma = 0


    // Aqui também poderia ter sido usado o "for" ou "while"
    for (let cadaNumero of numeros) {
        soma += cadaNumero
    }

    resposta.innerHTML = `<p>Soma total: ${soma}</p>`

    // Limpa os números do array após a soma, permitindo que o usuário adicione uma nova sequência de números
    numeros.length = 0

}

