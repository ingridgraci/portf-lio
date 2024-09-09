function ex1() {
    var n = parseInt(prompt("Digite um número"));
    if(n>0){
        alert("Esse número é positivo");
    }else if(n==0){
        alert("Esse número é neutro");
    }else if(n < 0){
        alert("Esse número é negativo");
    }
}