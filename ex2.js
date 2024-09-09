function ex2() {
    var i = parseInt(prompt("Digite sua idade"));
    if(i<=12){
        alert("Você é uma criança");
    }else if(i>=13 && i<=17){
        alert("Você é adolescente");
    }else if(i>=18 && i<=64){
        alert("Você é adulto");
    }else if(i>=65){
        alert("Você é idoso");
    }
}