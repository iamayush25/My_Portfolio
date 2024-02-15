function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function Resume() {
  window.location.href = "/";
}

let linksPage = document.querySelectorAll(".primary-navigation > li>a");

const outputElement = document.getElementById("output");
const text = ["Greetings, ", "I'm Ayush Sharma."];
let currentIndex = 0;
const delay = 3000;

function animateText() {
  outputElement.innerHTML = null;

  outputElement.innerHTML += text[currentIndex] + " ";
  currentIndex = (currentIndex + 1) % text.length;
}

setInterval(animateText, delay);

animateText(0);

function redirectToEmail() {
  // Replace recipient@example.com with the actual email address
  var emailRecipient = "ayush22@navgurukul.org";

  // Use the 'mailto' URL scheme to open the default email client
  window.open("mailto:" + emailRecipient, "_blank");
}
