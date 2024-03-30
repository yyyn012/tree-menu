// const list = document.querySelector(".list");
// const listContent = document.querySelectorAll(".list > li");
// const listBtn = document.querySelectorAll(".btn");
// const content = document.querySelector(".content > li");

// listBtn.forEach((element) => {
//   element.addEventListener("click", () => {
//     for (let i = 0; i < listBtn.length; i++) {
//       console.log(listBtn[0]);
//     }
//   });
// });

const tabBtns = document.querySelectorAll(".btn");
const content = document.querySelectorAll(".content");
const onConts = document.querySelectorAll(".on");

tabBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    if (onConts[index].classList.contains("on")) {
      onConts[index].classList.remove("on");
    } else {
      onConts[index].classList.add("on");
    }
  });
});
