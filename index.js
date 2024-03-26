var smenu; //현재 보여지고 있는 메뉴
function showmenu(divId) {
  //현재 보여지는 div 메뉴는 닫기
  if (smenu != null) smenu.style.display = "none";
  // 새 메뉴 펼치기
  var menu = document.getElementById(divId);

  menu.style.display = "block";
  //다시 설정
  smenu = menu;
}
