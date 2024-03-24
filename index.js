// $(document).ready(function () {
//   $(".menu>a").click(function () {
//     $(this).next("ul").toggleClass("hide");
//     var submenu = $(this).next("ul");
//     if (submenu.is(":visible")) {
//       submenu.show();
//     } else {
//       if (submenu.is(":invisible")) {
//         submenu.hide();
//       }
//     }
//   });
// });

// $(document).ready(function () {
//   $(".menu-btn").on("click", function () {
//     $(this).next().toggleClass("hide");
//   });
// });

const menuBtn = document.querySelectorAll(".menu-btn");
const hiddenMenu = document.getElementsByClassName(".hide");

function toggleMenu() {
  if (hiddenMenu.classList.contains("hide")) {
    hiddenMenu.classList.remove("hide");
    hiddenMenu.classList.add("open");
  } else {
    hiddenMenu.classList.remove("open");
    hiddenMenu.classList.add("hide");
  }
}
