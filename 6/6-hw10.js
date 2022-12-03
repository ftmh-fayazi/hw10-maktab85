let button = document.getElementById("hider");
let div = document.getElementById("text");
button.addEventListener("click", hide);
function hide() {
  div.remove();
  setInterval(() => {
    button.remove();
  }, 300);
}