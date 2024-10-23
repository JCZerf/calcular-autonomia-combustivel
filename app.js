function calcular() {
    let distaciaTotal = document.getElementById('distancia-km').value;
    let kilometrosPorLitro = document.getElementById('consumo-lt').value;
    let velocidadeMedia = document.getElementById('velocidade-km').value;
    let precoCombustivel = document.getElementById('preco-combustivel').value;
    if(distaciaTotal == "" || distaciaTotal == 0){
        alert("Insira a distância!");
        return;
    } else if(kilometrosPorLitro == "" || kilometrosPorLitro == 0){
        alert("Insira a autonomia");
        return;
    } else if (velocidadeMedia == "" || velocidadeMedia == 0){
        alert("Insira a velocidade média!");
        return;
    } else if (precoCombustivel == "" || precoCombustivel == 0){
        alert("Insira o preço do combustível!");
        return;
    }

    let calculoTempoViagem = calcularTempoViagem(distaciaTotal, velocidadeMedia);
    let quantidadeCombustivel = calcularQuantidadeCombustivel(distaciaTotal, kilometrosPorLitro);
    let precoDaViagem = calculaGastoViagem(precoCombustivel, quantidadeCombustivel);
    
    calculoTempoViagem = calculoTempoViagem.toFixed(2);
    calculoTempoViagem = calculoTempoViagem.toString();
    
    let horas = calculoTempoViagem.split('.')[0];
    let minutos = calculoTempoViagem.split('.')[1];

    let resultadoTempoDaviagem = document.getElementById("tempo-viagem");
    resultadoTempoDaviagem.innerHTML = `<big><b> ${horas}h${minutos}min </b></big>`;
    
    let resultadoQuantidadeDeCombustivel = document.getElementById("quantidade-combustivel");
    resultadoQuantidadeDeCombustivel.innerHTML = `<big><b>${quantidadeCombustivel.toFixed(2)}LT</b></big>`;

    let resultadoDoPrecoDaViagem = document.getElementById("valor-viagem");
    resultadoDoPrecoDaViagem.innerHTML = `<big><b>${precoDaViagem.toFixed(2)}R$</b></big>`;
    console.log(horas);
    
}

function resetar() {
    if(confirm("Limpar todos os dados?")){
        document.getElementById('distancia-km').value = "";
        document.getElementById('consumo-lt').value = "";
        document.getElementById('velocidade-km').value = "";
        document.getElementById('preco-combustivel').value = "";
        document.getElementById("tempo-viagem").textContent = "0 Hrs";
        document.getElementById("quantidade-combustivel").textContent = "0 LT";
        document.getElementById("valor-viagem").textContent = "0 R$";
    }else {
        alert("Dados mantidos!");
    }
    
}

function calcularTempoViagem(num1, num2){
    let tempoDaViagem = num1 / num2;
    return tempoDaViagem;
}

function calcularQuantidadeCombustivel(num1, num2) {
    let quantidadeCombustivel = num1 / num2;
    return quantidadeCombustivel;
}

function calculaGastoViagem(num1, num2) {
    let precoCombustivel = num1 * num2;
    return precoCombustivel;
}
