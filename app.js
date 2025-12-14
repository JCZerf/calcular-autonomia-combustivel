function calcular() {
  const distancia = parseFloat(document.getElementById("distancia-km").value);
  const consumo = parseFloat(document.getElementById("consumo-lt").value);
  const velocidade = parseFloat(document.getElementById("velocidade-km").value);
  const preco = parseFloat(document.getElementById("preco-combustivel").value);

  if (!distancia || !consumo || !velocidade || !preco) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  const tempoHorasDecimal = distancia / velocidade;
  const litrosNecessarios = distancia / consumo;
  const custoTotal = litrosNecessarios * preco;

  const horasReais = Math.floor(tempoHorasDecimal);
  const minutosReais = Math.round((tempoHorasDecimal - horasReais) * 60);

  const formatadorMoeda = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  document.getElementById(
    "tempo-viagem"
  ).innerText = `${horasReais}h ${minutosReais}min`;
  document.getElementById(
    "quantidade-combustivel"
  ).innerText = `${litrosNecessarios.toFixed(2)} Lt`;
  document.getElementById("valor-viagem").innerText =
    formatadorMoeda.format(custoTotal);
}

function resetar() {
  document.getElementById("distancia-km").value = "";
  document.getElementById("consumo-lt").value = "";
  document.getElementById("velocidade-km").value = "";
  document.getElementById("preco-combustivel").value = "";

  document.getElementById("tempo-viagem").innerText = "0 Hrs";
  document.getElementById("quantidade-combustivel").innerText = "0 Lt";
  document.getElementById("valor-viagem").innerText = "R$ 0,00";
}
