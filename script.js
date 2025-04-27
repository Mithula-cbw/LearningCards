// Define the flashcards
const flashcards = [
  { subject: "Geography", question: "Capital of Japan?", answer: "Tokyo" },
  { subject: "Geography", question: "Largest ocean?", answer: "Pacific Ocean" },
  { subject: "Geography", question: "Continent with most countries?", answer: "Africa" },
  { subject: "Common Knowledge", question: "Smallest country?", answer: "Vatican City" },
  { subject: "History", question: "Who was the first president of the United States?", answer: "George Washington" }
];

// Initialize with default subjects (Geography and Common Knowledge selected)
let currentSubjects = [];
let currentIndex = 0;

const flashcard = document.getElementById('flashcard');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const progress = document.getElementById('progress');

// Get filtered flashcards based on the selected subjects
function getFilteredFlashcards() {
  if (currentSubjects.length === 0) return flashcards;
  return flashcards.filter(card => currentSubjects.includes(card.subject));
}

// Update the card content
function updateCard() {
  const filteredCards = getFilteredFlashcards();
  if (filteredCards.length === 0) return;

  cardFront.textContent = filteredCards[currentIndex].question;
  cardBack.textContent = filteredCards[currentIndex].answer;

  progress.textContent = `${filteredCards[currentIndex].subject} - ${currentIndex + 1} of ${filteredCards.length}`;
}

// Navigate to a specific card
function goToCard(newIndex) {
  const filteredCards = getFilteredFlashcards();
  if (filteredCards.length === 0) return;

  currentIndex = (newIndex + filteredCards.length) % filteredCards.length;
  updateCard();
}

// Event listener for flipping the card
flashcard.addEventListener('click', () => {
  flashcard.classList.toggle('flipped');
});

// Event listener for the "Next" button
document.getElementById('next').addEventListener('click', () => {
  goToCard(currentIndex + 1);
});

// Event listener for the "Previous" button
document.getElementById('prev').addEventListener('click', () => {
  goToCard(currentIndex - 1);
});

// Handle subject selection changes (multiple selections allowed)
document.querySelectorAll('input[name="subject"]').forEach(input => {
  input.addEventListener('change', () => {
    // Get all checked checkboxes and update the currentSubjects array
    currentSubjects = Array.from(document.querySelectorAll('input[name="subject"]:checked')).map(input => input.value);
    currentIndex = 0; // Reset to the first card of the selected subjects
    updateCard(); // Update the displayed card
  });
});

// Initialize the first card display
updateCard();
