const d = document;

export default function galeria() {
  const $aBtn = d.querySelector(".siguiente"),
    $sBtn = d.querySelector(".atras"),
    $sliders = d.querySelectorAll(".slider2");

  let i = 0;

  d.addEventListener("click", (e) => {
    if (e.target === $sBtn) {
      e.preventDefault();
      $sliders[i].classList.remove("isactive");
      i--;

      if (i < 0) {
        i = $sliders.length - 1;
      }
      $sliders[i].classList.add("isactive");
    }
    if (e.target === $aBtn) {
      e.preventDefault();
      $sliders[i].classList.remove("isactive");
      i++;

      if (i >= $sliders.length) {
        i = 0;
      }
      $sliders[i].classList.add("isactive");
    }
  });
}
