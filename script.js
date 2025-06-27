// === CONTADOR REGRESSIVO ===

function atualizarContador() {
  const agora = new Date();
  const alvo = new Date("2025-06-30T12:00:00"); // Data alvo

  const diferenca = alvo - agora;

  if (diferenca <= 0) {
    document.getElementById("contador").textContent = "🎉 FELIZ ANIVERSARIOOOOOOOOOOOOOOOO TE AMO PARABENS BEIJO!";
    clearInterval(intervaloContador);
    return;
  }

  const segundos = Math.floor((diferenca / 1000) % 60);
  const minutos = Math.floor((diferenca / 1000 / 60) % 60);
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  document.getElementById("dias").textContent = String(dias).padStart(2, '0');
  document.getElementById("horas").textContent = String(horas).padStart(2, '0');
  document.getElementById("minutos").textContent = String(minutos).padStart(2, '0');
  document.getElementById("segundos").textContent = String(segundos).padStart(2, '0');
}

const intervaloContador = setInterval(atualizarContador, 1000);
atualizarContador();

// === GALERIA DE FOTOS ===

const fotos = [
  "imagens/Fuji1.png",
  "imagens/Fuji2.png",
  "imagens/Fuji3.png",
  "imagens/Fuji4.png",
  "imagens/Fuji5.png",
  "imagens/Fuji6.png",
  "imagens/Fuji7.png",
  "imagens/Fuji8.png",
  "imagens/Fuji9.png",
  "imagens/Fuji10.png"
];

let fotoAtual = 0;

function mudarFoto(direcao) {
  fotoAtual += direcao;

  if (fotoAtual < 0) {
    fotoAtual = fotos.length - 1;
  } else if (fotoAtual >= fotos.length) {
    fotoAtual = 0;
  }

  document.getElementById("foto").src = fotos[fotoAtual];
}
