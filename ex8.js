function ex8() {
    function encontrarMedia(vetor) {
        let soma = 0;
        for(let i = 0; i < vetor.length; i++){
            soma += vetor[i];
        }
        let media = soma / vetor.length;
        return media;
    }
    
    function criarVetor(qtdItens){
        let vetor = Array();
        for(let i = 0; i < qtdItens; i++){
            vetor[i] = parseInt(prompt("Digite o valor "+i));
        }
        return vetor;
    }
    
    var quantidade = parseInt(prompt("Digite a quantidade de valores que deseja informar"));
    
    const array = criarVetor(quantidade);
    
    alert(encontrarMedia(array));
}