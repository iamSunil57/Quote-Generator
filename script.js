const philosophyQuotes = [
  '"Man is condemned to be free; because once thrown into the world, he is responsible for everything he does." — Jean-Paul Sartre',
  '"The only thing I know is that I know nothing." — Socrates',
  '"Happiness is not something ready made. It comes from your own actions." — Dalai Lama',
];

const scienceQuotes = [
  '"Science is a way of thinking much more than it is a body of knowledge". — Carl Sagan',
  '"The important thing is not to stop questioning. Curiosity has its own reason for existing." — Albert Einstein',
  '"I’m sure the universe is full of intelligent life. It’s just been too intelligent to come here." — Arthur C. Clarke',
  '"The universe is under no obligation to make sense to you." — Neil deGrasse Tyson',
];
const loveQuotes = [
  '"If I know what love is, it is because of you." — Hermann Hesse',
  "“I need you like a heart needs a beat.” – One Republic",
  "“If I know what love is, it is because of you.” – Hermann Hesse",
  '"Love is composed of a single soul inhabiting two bodies." — Aristotle',
  '"You want to make me a better man." — Melvin Udall',
];

const techQuotes = [
  '"It has become appallingly obvious that our technology has exceeded our humanity." — Albert Einstein',
  '"Innovation distinguishes between a leader and a follower." — Steve Jobs',
  '"Technology is best when it brings people together." — Matt Mullenweg',
];

var categoryDropdown = document.getElementById("category");
var quoteDisplay = document.getElementById("quoteDisplay");

var arr = [];
var currentIndex = -1;

//Random Quote Function:
function getRandomQuote() {
  // console.log("Random Clicked");
  var allQuotes = scienceQuotes
    .concat(philosophyQuotes)
    .concat(loveQuotes)
    .concat(techQuotes);
  var randomIndex = Math.floor(Math.random() * allQuotes.length);
  return allQuotes[randomIndex];
}

//New Quote Function:
function newQuote() {
  // console.log("New Clicked");
  var selectedCategory = categoryDropdown.value;
  var selectedQuote;

  if (selectedCategory === "") {
    selectedQuote = getRandomQuote();
    currentIndex++;
    arr[currentIndex] = selectedQuote;
  } else {
    var selectedArray =
      selectedCategory === "science"
        ? scienceQuotes
        : selectedCategory === "philosophy"
        ? philosophyQuotes
        : selectedCategory === "love"
        ? loveQuotes
        : techQuotes;
    var randomIndex = Math.floor(Math.random() * selectedArray.length);
    selectedQuote = selectedArray[randomIndex];
    currentIndex++;
    arr[currentIndex] = selectedQuote;
  }

  quoteDisplay.textContent = selectedQuote;
}

//Previous Quote Function:
function previousQuote() {
  // console.log("Previous Clicked");
  if (currentIndex > 0) {
    currentIndex--;
    selectedQuote = arr[currentIndex];
    quoteDisplay.textContent = selectedQuote;
  } else if (currentIndex === 0) {
    currentIndex = 0; // Set currentIndex to -1 to prevent further decrease
    quoteDisplay.textContent = arr[0];
  }
}

//Next Quote Function:
function nextQuote() {
  // console.log("Next Clicked");
  var max = arr.length;
  currentIndex++;
  if (currentIndex <= max - 1) {
    selectedQuote = arr[currentIndex];
    quoteDisplay.textContent = selectedQuote;
  } else {
    currentIndex = max - 1;
  }
}
const previousButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const randomButton = document.getElementById("randomButton");
const newButton = document.getElementById("newButton");

previousButton.addEventListener("click", previousQuote);
nextButton.addEventListener("click", nextQuote);
newButton.addEventListener("click", newQuote);
randomButton.addEventListener("click", function () {
  const selectedQuote = getRandomQuote(); // Get a random quote
  quoteDisplay.textContent = selectedQuote; // Update the quote display
});
