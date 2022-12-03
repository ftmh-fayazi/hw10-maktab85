let infoBox = document.querySelectorAll(".infoBox");
let toolTipCaption = document.querySelectorAll(".tooltips");
let mainBox = document.querySelectorAll(".mainBox");

// selecting the elements for which we want to add a tooltip
mainBox.forEach((box) => {
  let msgDiv = box.querySelector(".infoBox");
  let ttDiv = box.querySelector("p");

  msgDiv.addEventListener("mouseover", () => { ttDiv.style.visibility = "inherit";
  });
  msgDiv.addEventListener("mouseleave", () => { let TT = box.querySelector("p");
    ttDiv.style.visibility = "hidden";
  });
});
