// Define the flashcards
const flashcards = [
  { subject: "Geography", question: "Capital of Japan?", answer: "Tokyo" },
  { subject: "Geography", question: "Largest ocean?", answer: "Pacific Ocean" },
  { subject: "Geography", question: "Continent with most countries?", answer: "Africa" },
  { subject: "Common Knowledge", question: "Smallest country?", answer: "Vatican City" },
  { subject: "History", question: "Who was the first president of the United States?", answer: "George Washington" }
];

// Manually define subjects
const subjects = ["Geography", "Common Knowledge", "History"];
let currentSubjects = ["Geography"];

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

  progress.classList.add('updated');
  setTimeout(() => progress.classList.remove('updated'), 300);
}

// Navigate to a specific card
function goToCard(newIndex) {
  const filteredCards = getFilteredFlashcards();
  if (filteredCards.length === 0) return;

  currentIndex = (newIndex + filteredCards.length) % filteredCards.length;
  updateCard();
}

// Event listener for flipping the card
document.getElementById('flashcard').addEventListener('click', () => {
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

// Populate the subject filter dropdown with the subjects
const subjectFilter = document.getElementById('subject-filter');
subjects.forEach(subj => {
  const option = document.createElement('option');
  option.value = subj;
  option.textContent = subj;
  subjectFilter.appendChild(option);
});

// Handle subject filter changes
subjectFilter.addEventListener('change', () => {
  currentSubjects = Array.from(subjectFilter.selectedOptions).map(option => option.value);
  currentIndex = 0;
  updateCard();
});

// Initialize the first card display
updateCard();
