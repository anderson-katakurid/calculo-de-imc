function calcular(){ 
    var nome = window.document.getElementById('inome')
    var altura = window.document.getElementById('ialtura')
    var peso = window.document.getElementById('ipeso')
    var resultado = window.document.getElementById('res')
    if(nome.value !== '' && altura.value !== '' && peso.value !== ''){
    var nom = (nome.value)
    var alto = Number(altura.value)
    var pes = Number(peso.value)
    var valor = (pes / (alto * alto)).toFixed(2)
    var classificacao = ''
if(valor < 18.5){
    classificacao = 'abaixo do peso.'
}else if(valor < 25){
    classificacao = 'com o peso ideal'
}else if(valor < 30){
    classificacao = 'um pouco a cima do peso'
}else if(valor < 35){
    classificacao = 'com obesidade grau 1'
}else if(valor < 40){
    classificacao = 'com obesidade grau 2'
}else if(valor < 40){
    classificacao = 'com obesidade grau 2'
}else {
    classificacao = 'obesidade grau 3. Cuidado!!!'
}
resultado.innerHTML = `${nom}, o valor do seu IMC ${valor}, e você está ${classificacao}`
}else{
    resultado.innerHTML = 'Falta preencher'
}

}