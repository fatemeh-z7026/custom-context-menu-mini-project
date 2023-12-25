let menu = document.getElementById("contextMenu");
menu.style.display = "none";
function contextHandler(event) {
  event.preventDefault();
  if (menu.style.display === "none") {
    menu.style.left = event.pageX + "px";
    menu.style.top = event.pageY + "px";
    menu.style.display = "block";
  } else {
    menu.style.left = event.pageX + "px";
    menu.style.top = event.pageY + "px";
  }
  console.log(event);
}

function clickContextMenu() {
  menu.style.display = "none";
}

function keyDownHandler(event) {
  if (event.keyCode === 27) {
    menu.style.display = "none";
  }
}

document.body.addEventListener("contextmenu", contextHandler);
document.body.addEventListener("click", clickContextMenu);
document.body.addEventListener("keydown", keyDownHandler);
