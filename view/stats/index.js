(async () => {
    const { data } = await axios.get('/api/navs');
    logiado = data.logiado;
    if (!logiado) {
        window.location.href = '/login/';

    }

})();

const partidasGanadas = document.querySelector('#partidas-wins');
const partidasPerdidas = document.querySelector('#partidas-lose');
const zapatos = document.querySelector('#zapato');
const form = document.querySelector('#form');

const inputGanadas = document.querySelector('#partidas-ganadas');
const inputPerdidas = document.querySelector('#partidas-perdidas');
const inputZapatos = document.querySelector('#zapatos');

(async () => {
    const { data } = await axios.get('/api/stats');

  const wins = data.wins;
  const lose = data.loses;
  const zapato = data.zapatos;

  partidasGanadas.innerHTML = wins;
  partidasPerdidas.innerHTML = lose;
  zapatos.innerHTML = zapato;

})();


form.addEventListener('submit', async (e) => {
    e.preventDefault();


    await axios.patch(`/api/stats`, { partidasGanadas : inputGanadas.value, partidasPerdidas: inputPerdidas.value, zapatos : inputZapatos.value } );

    window.location.pathname = '/stats';
});
