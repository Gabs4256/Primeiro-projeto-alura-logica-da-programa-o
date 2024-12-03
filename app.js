alert('Bem vindo Gabriel, esse é o jogo do mundo secreto'); 
let numeroSecreto = 29;
let chute = prompt('Escolha um numero entre 1 e 30') 
console.log(numeroSecreto);
console.log(chute); 
if(chute == numeroSecreto) {
    console.log('Isso ai! Você descobriu o número secreto(29)');
}else if (chute < numeroSecreto) {alert ('Você errou, seu número é menor!');} 
else if (chute > numeroSecreto) {alert('Você errou, seu número é maior!');}
else {alert ('Não válido')} 