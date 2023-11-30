alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 10;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt(`Informe um número entre 1 e ${numeroMaximo}`);

    if(numeroSecreto == chute){
        break;
    }else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }   
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


/* if(tentativas > 1){
    acertou.innerHTML = `acertou, o numeroSecreto é ${numeroSecreto} com ${tentativas} tentativas`;
}else{
    acertou.innerHTML = `acertou, o numeroSecreto é ${numeroSecreto} com ${tentativas} tentativa`;
} */

