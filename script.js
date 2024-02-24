function openNav() {
  let sidePanel = document.getElementById("mySidepanel");
  let currentWidth = sidePanel.style.width;

  if (currentWidth === "0px" || currentWidth === "") {
    sidePanel.style.width = "250px";
  } else {
    sidePanel.style.width = "0";
  }
}

function closeBtn() {
  document.getElementById("mySidepanel").style.width = "0";
}

