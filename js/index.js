const listBtn = document.querySelectorAll(".list-btn");
const onConts = document.querySelectorAll(".on");
const content = document.querySelectorAll(".content");
const contentList = document.querySelectorAll(".content > li");

listBtn.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    if (onConts[index].classList.contains("on")) {
      onConts[index].classList.remove("on");
    } else {
      onConts[index].classList.add("on");
    }
  });
});

contentList.forEach(() => {
  for (let i = 0; i < contentList.length; i++) {
    contentList[i].classList.add("list-item");
  }
});
