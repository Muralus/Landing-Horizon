const d = document;

export default function tarjeta() {
  d.querySelectorAll(".maquina").forEach(function (e) {
    e.addEventListener("click", function () {
      this.classList.toggle("descubierto");
    });
  });
}
