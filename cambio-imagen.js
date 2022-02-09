const d = document;

export default function slider() {
  const $nextBtn = d.querySelector(".next"),
    $backBtn = d.querySelector(".back"),
    $slides = d.querySelectorAll(".slider");

  let i = 0;

  d.addEventListener("click", (e) => {
    if (e.target === $backBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i--;

      if (i < 0) {
        i = $slides.length - 1;
      }
      $slides[i].classList.add("active");
    }
    if (e.target === $nextBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i++;

      if (i >= $slides.length) {
        i = 0;
      }
      $slides[i].classList.add("active");
    }
  });
}
