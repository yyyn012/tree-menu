const html = document.querySelector("html");
const body = document.querySelector("body");
const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector(".nav");

function openMenu() {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    navBtn.classList.remove("active");
    html.classList.remove("body-noScroll");
    body.classList.remove("body-noScroll");
  } else {
    nav.classList.add("active");
    navBtn.classList.add("active");
    html.classList.add("body-noScroll");
    body.classList.add("body-noScroll");
  }
}

navBtn.addEventListener("click", openMenu);
