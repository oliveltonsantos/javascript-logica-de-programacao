const inputNome = document.getElementById('nome')
const resposta = document.querySelector('div.resposta')

function mensagemDoFuturo() {
    const nome = inputNome.value

    if (nome.trim() === '') {
        alert('Digite um nome no campo.')
        inputNome.value = ''
        inputNome.focus()
        return
    }


    if (nome === 'Christopher Julius Rock III') {
        gerador()
    } else {
        alert('O nome é inválido. Tente outra vez!')
        inputNome.value = ''
        inputNome.focus()
        return
    }
}

function gerador() {
    resposta.innerHTML = `
        <p>+-------=======------+</p>
        <p>Passa um dólar carinha que mora logo ali! 💵</p>
        <p>+-------=======------+</p>
    `
}