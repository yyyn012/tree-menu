const list = document.querySelectorAll(".list > li");
const content = document.querySelectorAll(".content");
const listBtn = document.querySelectorAll(".btn");

listBtn.forEach((element) => {
  element.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  for (let i = 0; i < list.length; i++) {
    const id = listBtn[i].id;
    console.log(id);
  }
}
