// Define flashcards by subject
const geographyFlashcards = [
  { question: "Capital of Japan?", answer: "Tokyo", answered: false },
  { question: "Largest ocean?", answer: "Pacific Ocean", answered: false },
  { question: "Continent with most countries?", answer: "Africa", answered: false },
  { question: "geo 2", answer: "George Washington", answered: false },
  { question: "geo 3", answer: "George Washington", answered: false },
  { question: "geo 4", answer: "George Washington", answered: false },
  { question: "geo 5", answer: "George Washington", answered: false },
  { question: "geo 6", answer: "George Washington", answered: false }
];

const historyFlashcards = [
  { question: "Who was the first president of the United States?", answer: "George Washington", answered: false },
  { question: "his 2", answer: "George Washington", answered: false },
  { question: "his 3", answer: "George Washington", answered: false },
  { question: "his 4", answer: "George Washington", answered: false },
  { question: "his 5", answer: "George Washington", answered: false },
  { question: "his 6", answer: "George Washington", answered: false }
];

const commonKnowledgeFlashcards = [
  { question: "Smallest country?", answer: "Vatican City", answered: false }
];

// Initialize variables
let currentSubjects = ["Geography", "History"];
let pooledFlashcards = [];
let currentIndex = 0;

const flashcard = document.getElementById('flashcard');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const progress = document.getElementById('progress');

// Load flashcards from localStorage if available
function loadFlashcardsFromLocalStorage() {
  const savedFlashcards = localStorage.getItem('flashcards');
  if (savedFlashcards) {
    pooledFlashcards = JSON.parse(savedFlashcards);
  } else {
    pooledFlashcards = [];
  }

  // Filter out answered flashcards from the loaded data
  pooledFlashcards = pooledFlashcards.filter(card => !card.answered);
}

// Save flashcards to localStorage
function saveFlashcardsToLocalStorage() {
  localStorage.setItem('flashcards', JSON.stringify(pooledFlashcards));
}

// Mark a flashcard as answered
function markAsAnswered() {
  const currentCard = pooledFlashcards[currentIndex];
  currentCard.answered = true;
  saveFlashcardsToLocalStorage(); // Save the updated flashcards to localStorage
  updateCard(); // Update the displayed card after marking as answered
}

// Function to combine selected subject flashcards while keeping their order
function combineFlashcards() {
  if (pooledFlashcards.length === 0) {
    pooledFlashcards = [];

    // Add flashcards from the selected subjects
    if (currentSubjects.includes('Geography')) {
      pooledFlashcards.push(...geographyFlashcards);
    }
    if (currentSubjects.includes('History')) {
      pooledFlashcards.push(...historyFlashcards);
    }
    if (currentSubjects.includes('Common Knowledge')) {
      pooledFlashcards.push(...commonKnowledgeFlashcards);
    }

    // Filter out the answered flashcards again
    pooledFlashcards = pooledFlashcards.filter(card => !card.answered);
  }

  // Shuffle the remaining flashcards
  shuffleFlashcards(pooledFlashcards);

  currentIndex = 0; // Reset the index to start from the beginning
  updateCard(); // Update the card with the first question
}

// Shuffle the flashcards randomly
function shuffleFlashcards(flashcards) {
  for (let i = flashcards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]]; // Swap elements
  }
}

// Update the card content
function updateCard() {
  if (pooledFlashcards.length === 0) {
    cardFront.textContent = "No flashcards available.";
    cardBack.textContent = "";
    progress.textContent = "";
    return;
  }

  const currentCard = pooledFlashcards[currentIndex];

  cardFront.textContent = currentCard.question;
  cardBack.textContent = currentCard.answer;

  progress.textContent = `Card ${currentIndex + 1} of ${pooledFlashcards.length}`;
}

// Navigate to a specific card
function goToCard(newIndex) {
  currentIndex = (newIndex + pooledFlashcards.length) % pooledFlashcards.length;
  updateCard();
}

// Event listener for flipping the card
flashcard.addEventListener('click', () => {
  flashcard.classList.toggle('flipped');
  markAsAnswered();
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
    combineFlashcards(); // Combine the selected subjects' flashcards
  });
});

// Initialize the first card display
loadFlashcardsFromLocalStorage(); // Load flashcards from localStorage
combineFlashcards(); // Combine flashcards from selected subjects
