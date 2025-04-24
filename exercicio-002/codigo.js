function Mensagem() {
    var nome = window.document.getElementById('txtn')

    var resp = window.document.querySelector('div.res')

    if (nome.value == 0) {
        window.alert('Digite o seu nome!')
    } else {
        resp.innerHTML = `<p>Olá, ${nome.value}! É um prazer conhecer você!</p>`
    }
}