const inicios = [
  "Hoje não vai dar porque",
  "Infelizmente não posso ir porque",
  "A academia vai ter que esperar, pois"
];

const motivos = [
  "meu joelho está em greve",
  "o universo mandou sinais contraditórios",
  "meu gato está carente",
  "minha motivação tirou férias",
  "a gravidade está mais forte hoje"
];

const finais = [
  "...e eu respeito os ciclos cósmicos.",
  "...e não quero desafiar o destino.",
  "...e isso é autocuidado.",
  "...e meu sofá precisa de mim.",
  "...e é uma questão de sobrevivência emocional."
];

function gerarDesculpa() {
  const inicio = inicios[Math.floor(Math.random() * inicios.length)];
  const motivo = motivos[Math.floor(Math.random() * motivos.length)];
  const final = finais[Math.floor(Math.random() * finais.length)];

  const desculpa = `${inicio} ${motivo} ${final}`;
  document.getElementById("desculpa").textContent = desculpa;
}