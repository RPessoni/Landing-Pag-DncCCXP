const Dia = window.document.getElementById('dia')
const Hora = window.document.getElementById('hora')
const Min = window.document.getElementById('min')
const Seg = window.document.getElementById('Seg')

const lancamento = "23 mar 2024"

function countDown () {
    const datalanc = new Date (lancamento)
    const datahoje = new Date ()

    const totalHoras = ( datalanc-datahoje )/1000;

    const finaldia =Math.floor (totalHoras/60 /60 /24);
    const finalhora = Math.floor(totalHoras /60/60)% 24;
    const finalmin = Math.floor(totalHoras /60)% 60
    const finalseg = Math.floor(totalHoras) % 60;

Dia.innerHTML =  formatoTempo(finaldia)+ "D-"
Hora.innerHTML = formatoTempo(finalhora)+ "H-"
Min.innerHTML =  formatoTempo(finalmin) + "M-"
Seg.innerHTML =  formatoTempo(finalseg)+"S " 

}
function formatoTempo(tempo){

    return tempo < 10? `0${tempo}` : tempo;  
}


countDown();
setInterval(countDown,1000);