const d = document;

export default function contador(id,limitDate,finalMessage){
    const $contdownT = d.getElementById(id);
    const $countDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(() => {
      let now =  new Date().getTime();
      limitDate = $countDate - now;   
      
      let segundos = 1000;
      let minutos = segundos * 60;
      let horas = minutos * 60;
      let dias = horas * 24

      let textDay =  Math.floor(limitDate / dias);
      let textHoras =  Math.floor((limitDate % dias) / horas);
      let textMinutos = Math.floor((limitDate % horas) / minutos);
      let textSegundos =  Math.floor((limitDate % minutos) / segundos)

      d.querySelector(".day").innerText = textDay;
      d.querySelector(".hora").innerText = textHoras;
      d.querySelector(".minutos").innerText = textMinutos;
      d.querySelector(".segundos").innerText = textSegundos;



    }, 1000);

}