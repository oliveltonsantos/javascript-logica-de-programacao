function Mensagem() {
    var nome = window.document.getElementById('txtn')

    var resp = window.document.querySelector('div.res')

    resp.innerHTML = `<p>Olá, ${nome.value}! É um prazer conhecer você!</p>`
}