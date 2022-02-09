import slider from "./cambio-imagen.js";
import contador from "./contador.js";
import ocultar from "./ocultar-nav.js";
import scrollBtn from "./ocultar-scrollbtn.js";
import galeria from "./tarjeta-cambio.js";
import tarjeta from "./tarjeta-descubrir.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  contador("#contador", "February 18, 2022 00:00:00", "Aloy esta de vuelta");
  slider();
  tarjeta();
  galeria();
  ocultar(".header");
  scrollBtn(".scroll-btn");
});
