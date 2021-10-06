let menu = false;

function navbar() {
  const check = document.querySelector("#nav-items");

  if (!menu) {
    menu = true;
    check.classList.remove("close");
    check.classList.add("open");
    console.log(menu);
  } else {
    menu = false;
    check.classList.remove("open");
    check.classList.add("close");
    console.log(menu);
  }
}
