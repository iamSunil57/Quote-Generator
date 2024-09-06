const increaseButton = document.getElementById("increaseFont");
const decreaseButton = document.getElementById("decreaseFont");
const displayQuote = document.getElementById("quoteDisplay");

// Initial font size in pixels:
var currentFontSize = 20;
var minFontSize = 16; // Minimum font size
var maxFontSize = 40; // Maximum font size

function increaseFontSize() {
  if (currentFontSize < maxFontSize) {
    currentFontSize += 3; // Increase font size by 3 pixels
    displayQuote.style.fontSize = currentFontSize + "px";
  }
}

function decreaseFontSize() {
  if (currentFontSize > minFontSize) {
    currentFontSize -= 3; // Decrease font size by 3 pixels
    displayQuote.style.fontSize = currentFontSize + "px";
  }
}

increaseButton.addEventListener("click", increaseFontSize);
decreaseButton.addEventListener("click", decreaseFontSize);

//Quote Size:
const increaseSize = document.getElementById("increaseQuote");
const decreaseSize = document.getElementById("decreaseQuote");
const quote = document.getElementById("quoteDisplay");

// Initial Quote size in pixels:
var currentQuoteSize = 20;
var minQuoteSize = 16; // Minimum quote size
var maxQuoteSize = 40; // Maximum quote size

function increaseQuoteSize() {
  if (currentQuoteSize < maxQuoteSize) {
    currentQuoteSize += 3; // Increase font size by 3 pixels
    quote.style.fontSize = currentQuoteSize + "px";
  }
}

function decreaseQuoteSize() {
  if (currentFontSize > minQuoteSize) {
    currentQuoteSize -= 3; // Decrease font size by 3 pixels
    quote.style.fontSize = currentQuoteSize + "px";
  }
}

increaseSize.addEventListener("click", increaseQuoteSize);
decreaseSize.addEventListener("click", decreaseQuoteSize);

//Dark Mode:
const body = document.body;
const darkButton = document.getElementById("darkButton");

// Get mode from localStorage
let mode = localStorage.getItem("mode");

// Apply initial mode
if (mode === "dark") {
  body.classList.add("dark");
  darkButton.innerHTML = "Light Mode"; // Update button text if in dark mode
} else {
  body.classList.add("light");
  darkButton.innerHTML = "Dark Mode"; // Update button text if in light mode
}

function darkMode() {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("mode", "dark");
    darkButton.innerHTML = "Light Mode"; // Switch button text
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("mode", "light");
    darkButton.innerHTML = "Dark Mode"; // Switch button text
  }
}

// Add event listener to the button
darkButton.addEventListener("click", darkMode);
