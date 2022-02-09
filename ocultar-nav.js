const d = document,
  w = window;

export default function ocultar(nav) {
  const $scrollNav = d.querySelector(nav);

  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset;

    if (scrollTop > 450) {
      $scrollNav.classList.add("hidden");
    } else {
      $scrollNav.classList.remove("hidden");
    }
  });
}
