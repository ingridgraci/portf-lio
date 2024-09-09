function ex6() {
    var aleatorio =  Math.round(Math.random()*10);
    var tentativa = 0;
    var i = 0;
    while(tentativa !== aleatorio){
        tentativa = parseInt(prompt("Digite um número entre 1 e 10"))
    }
    alert("Parabéns, você acertou!");
}