// Define the flashcards
const flashcards = [
  { subject: "Geography", question: "Capital of Japan?", answer: "Tokyo", answered: false },
  { subject: "Geography", question: "Largest ocean?", answer: "Pacific Ocean", answered: false },
  { subject: "Geography", question: "Continent with most countries?", answer: "Africa", answered: false },
  { subject: "Common Knowledge", question: "Smallest country?", answer: "Vatican City", answered: false },
  { subject: "History", question: "Who was the first president of the United States?", answer: "George Washington", answered: false }
];

const settingBtn = document.querySelector('.setting-btn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');
const closeBtn2 = document.getElementById('close-btn2');
const questionCount = document.getElementById('Question-count');

settingBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

closeBtn2.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Optional: Click outside popup to close
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
// Initialize with default subjects (Geography and Common Knowledge selected)
let currentSubjects = [];
let currentIndex = 0;

const flashcard = document.getElementById('flashcard');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const progress = document.getElementById('progress');

// Get filtered flashcards based on the selected subjects
function getFilteredFlashcards() {
  if (currentSubjects.length === 0) return flashcards.filter(card => !card.answered);
  return flashcards.filter(card => currentSubjects.includes(card.subject) && !card.answered);
}


// Update the card content
function updateCard() {
  const filteredCards = getFilteredFlashcards();
  if (filteredCards.length === 0) return;

  cardFront.textContent = filteredCards[currentIndex].question;
  cardBack.textContent = filteredCards[currentIndex].answer;

  progress.textContent = `${filteredCards[currentIndex].subject} - ${currentIndex + 1} of ${filteredCards.length}`;
  questionCount.textContent = `Available questions: ${filteredCards.length} `;
}

// Navigate to a specific card
function goToCard(newIndex) {
  const filteredCards = getFilteredFlashcards();
  if (filteredCards.length === 0) return;

  
  flashcard.classList.remove('flipped');
  
  setTimeout(() => {
    currentIndex = (newIndex + filteredCards.length) % filteredCards.length;
    updateCard();
  }, 300);
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
