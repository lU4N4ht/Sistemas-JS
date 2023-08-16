'use script'

const botaoSoma = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')

function somatoria(){

    const numero1 =  parseFloat(document.getElementById('primeironumero').value)
    const numero2 = parseFloat(document.getElementById('segundonumero').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 + numero2

    resultado.textContent = total

}
function identificar(){
    const numero =  parseFloat(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')

    if(numero > 0){
        resultado.textContent = 'POSITIVO'
    } else if( numero < 0){
        resultado.textContent = 'NEGATIVO'
    } else{
        resultado.textContent = 'NULO'
    }

}

botaoSoma.addEventListener('click', somatoria)
botaoIdentificar.addEventListener('click', identificar)