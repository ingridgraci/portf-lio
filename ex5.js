function ex5() {
    var soma = 0;
    var n = Array();

    do{
        n = parseInt(prompt("Digite um número (se já quiser calcular, digite 0):"));
        if (n !== 0) {
            soma += n;
        }
    } while (n !== 0);

    alert("a soma dos números inseridos é: " + soma);
}