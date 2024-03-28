const list = document.querySelectorAll(".list > li");
const listBtn = document.querySelectorAll(".btn");

function Menu() {
  for (let i = 0; i < list.length; i++) {
    list[i].listBtn.addEventListener("click", toggleMenu);
  }
}

function toggleMenu() {
  if (list[i].classList.contains("on")) {
    list[i].classList.remove("on");
  } else {
    list[i].classList.add("on");
  }
}
