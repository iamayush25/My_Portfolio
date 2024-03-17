function openNav() {
  let sidePanel = document.getElementById("mySidepanel");
  let currentWidth = sidePanel.style.width;
    // if sidepannel width 0px or empty (Like close) that's why we give 250px
  if (currentWidth === "0px" || currentWidth === "") {
    sidePanel.style.width = "100%";
    sidePanel.style.height = "5%";
  } 
    // if sidepannel width !0px mean sidepanel is open that's why we give 0px  
    else {
    sidePanel.style.width = "0";
  }
}

function closeBtn() {
  document.getElementById("mySidepanel").style.width = "0";
}
