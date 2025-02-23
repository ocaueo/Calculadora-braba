let resposta = document.querySelector(".resposta");

btn.onclick = function(){
    let a = altura.value;
    let p = peso.value;
    
    let calculo = p / (a * a);
    console.log(calculo);
    resposta.innerText = `Seu IMC é: ${calculo.toFixed(2)}`;
    
    if(calculo <= 18.4){ resposta.innerText += ` Abaixo do Peso`; return};
    if(calculo <= 24.9){ resposta.innerText += ` Peso Ideal`; return};
    if(calculo <= 29.9){ resposta.innerText += ` Excesso de Peso`; return};
    if(calculo <= 34.9){ resposta.innerText += ` Obesidade 1`; return};
    if(calculo <= 39.9){ resposta.innerText += ` Obesidade 2`; return};
}

