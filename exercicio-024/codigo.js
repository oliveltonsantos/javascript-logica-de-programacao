function calcular() {
    var inputDistancia = document.getElementById('inputdistancia')
    var res = document.querySelector('div.res')

    var StringDistancia = inputDistancia.value
    var distancia = Number(StringDistancia)

    if (isNaN(distancia) || distancia <= 0) {
        alert('Insira valores válidos.')
        return
    }

    if (distancia <= 200) {
        let precoAte200Km = distancia * 0.50
        res.innerHTML = `<p>O preço a ser pago para pecorrer ${distancia} KM é ${precoAte200Km.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>`
    } else {
        let precoMaisKm = distancia * 0.45
        res.innerHTML = `<p>O preço a ser pago para percorrer ${distancia} KM é ${precoMaisKm.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>`
    }
}
