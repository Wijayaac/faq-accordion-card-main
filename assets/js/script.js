const accordion = document.getElementsByClassName("faq__item");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", () => {
    if (!accordion[i].classList.contains("active")) {
      let active = document.querySelectorAll(
        ".faq__list-item .faq__item.active"
      );
      for (let j = 0; j < active.length; j++) {
        active[j].classList.remove("active");
      }
      accordion[i].classList.toggle("active");
    } else {
      accordion[i].classList.toggle("active");
    }
  });
}
