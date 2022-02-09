const d = document,
  w = window;

export default function scrollBtn(btn) {
  const $scrollBt = d.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset;

    if (scrollTop > 600) {
      $scrollBt.classList.remove("hidden2");
    } else {
      $scrollBt.classList.add("hidden2");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 600,
      });
    }
  });
}
