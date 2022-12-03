let btn = document.querySelector("input");

let menuItemDiv = document.getElementById("menuItem");
btn.addEventListener("click", closeOpenMenu);
function closeOpenMenu() {
  if (menuItemDiv.style.display === "none") {
    menuItemDiv.style.display = "block";
  } else {
    menuItemDiv.style.display = "none";
  }
}
