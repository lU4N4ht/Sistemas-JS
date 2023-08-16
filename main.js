'use script'

const botaoSoma = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoMedia = document.getElementById('media-calcular')
const botaoOrdenar = document.getElementById('ordenar')
 const botaoDivisor = document.getElementById('divisor')


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
function mediacalcular(){
    const nota1 =  parseFloat(document.getElementById('nota1').value)
    const nota2 =  parseFloat(document.getElementById('nota2').value)
    const nota3 =  parseFloat(document.getElementById('nota3').value)
    const nota4 =  parseFloat(document.getElementById('nota4').value)
    const resultado = document.getElementById('resultado-media')

    const media = (nota1 + nota2 + nota3 + nota4) / 4
    
    resultado.textContent = media

    if(media >= 5){
        const situacao = alert('A situação do aluno é: APROVADO!')
    } else if( media < 5){

        situacao = alert('A situação do aluno é: APROVADO!')
    } 
}
function ordenarnumeros(){
    const numero1 =  parseFloat(document.getElementById('numero1').value)
    const numero2 =  parseFloat(document.getElementById('numero2').value)
    const numero3 =  parseFloat(document.getElementById('numero3').value)
    const numeros = [ numero1 , numero2 , numero3 ]

    numeros.sort((a, b) => a - b)

    console.log(numeros)

    const resultado = document.getElementById('resultadoordenar')

    resultado.textContent = numeros

}
function divisornumeros(){
    const numero1 =  parseFloat(document.getElementById('valor1').value)
    const numero2 =  parseFloat(document.getElementById('valor2').value)
    const numero3 =  parseFloat(document.getElementById('valor3').value)
    const numero4 =  parseFloat(document.getElementById('valor4').value)
    const resultado = document.getElementById('resultadoordenar')

    const resto =  numero1 % 2 && numero1 % 3

    if(resto == 0){

        resultado.textContent = resto

    } 

    
}


botaoSoma.addEventListener('click', somatoria)
botaoIdentificar.addEventListener('click', identificar)
botaoMedia.addEventListener('click', mediacalcular)
botaoOrdenar.addEventListener('click', ordenarnumeros)
botaoDivisor.addEventListener('click', divisornumeros)