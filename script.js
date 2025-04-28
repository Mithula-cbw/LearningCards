// Define the flashcards
const flashcards = [
  { subject: "History", question: "Who was the first president of the United States?", answer: { text: "George Washington", link: "https://en.wikipedia.org/wiki/George_Washington" }, answered: false },
  { subject: "History", question: "What year did World War I begin?", answer: { text: "1914", link: "https://en.wikipedia.org/wiki/World_War_I" }, answered: false },
  { subject: "History", question: "Who was the first female prime minister of the UK?", answer: { text: "Margaret Thatcher", link: "https://en.wikipedia.org/wiki/Margaret_Thatcher" }, answered: false },
  { subject: "History", question: "What year did the Titanic sink?", answer: { text: "1912", link: "https://en.wikipedia.org/wiki/RMS_Titanic" }, answered: false },
  { subject: "History", question: "Who wrote the Declaration of Independence?", answer: { text: "Thomas Jefferson", link: "https://en.wikipedia.org/wiki/Thomas_Jefferson" }, answered: false },
  { subject: "History", question: "Which event marked the start of the American Civil War?", answer: { text: "The Battle of Fort Sumter", link: "https://en.wikipedia.org/wiki/Battle_of_Fort_Sumter" }, answered: false },
  { subject: "History", question: "Who was the longest-reigning British monarch before Queen Elizabeth II?", answer: { text: "Queen Victoria", link: "https://en.wikipedia.org/wiki/Queen_Victoria" }, answered: false },
  { subject: "History", question: "Which war ended with the Treaty of Versailles?", answer: { text: "World War I", link: "https://en.wikipedia.org/wiki/Treaty_of_Versailles" }, answered: false },
  { subject: "History", question: "What year did the Berlin Wall fall?", answer: { text: "1989", link: "https://en.wikipedia.org/wiki/Berlin_Wall" }, answered: false },
  { subject: "History", question: "Who was the first woman to fly solo across the Atlantic?", answer: { text: "Amelia Earhart", link: "https://en.wikipedia.org/wiki/Amelia_Earhart" }, answered: false },
  { subject: "History", question: "Which country did the United States fight in the Vietnam War?", answer: { text: "Vietnam", link: "https://en.wikipedia.org/wiki/Vietnam_War" }, answered: false },
  { subject: "History", question: "What was the name of the ship that carried the Pilgrims to America?", answer: { text: "The Mayflower", link: "https://en.wikipedia.org/wiki/Mayflower" }, answered: false },
  { subject: "History", question: "What year did the Great Fire of London occur?", answer: { text: "1666", link: "https://en.wikipedia.org/wiki/Great_Fire_of_London" }, answered: false },
  { subject: "History", question: "Who was the first man to walk on the moon?", answer: { text: "Neil Armstrong", link: "https://en.wikipedia.org/wiki/Neil_Armstrong" }, answered: false },
  { subject: "History", question: "Which civilization built the pyramids of Giza?", answer: { text: "Ancient Egypt", link: "https://en.wikipedia.org/wiki/Ancient_Egypt" }, answered: false },
  { subject: "History", question: "Who assassinated President Abraham Lincoln?", answer: { text: "John Wilkes Booth", link: "https://en.wikipedia.org/wiki/John_Wilkes_Booth" }, answered: false },
  { subject: "History", question: "What was the name of the ship that brought the first enslaved Africans to America?", answer: { text: "The White Lion", link: "https://en.wikipedia.org/wiki/White_Lion_(1619_ship)" }, answered: false },
  { subject: "History", question: "Which U.S. president delivered the Gettysburg Address?", answer: { text: "Abraham Lincoln", link: "https://en.wikipedia.org/wiki/Gettysburg_Address" }, answered: false },
  { subject: "History", question: "Who was the leader of the Soviet Union during World War II?", answer: { text: "Joseph Stalin", link: "https://en.wikipedia.org/wiki/Joseph_Stalin" }, answered: false },
  { subject: "History", question: "What event started the French Revolution?", answer: { text: "The Storming of the Bastille", link: "https://en.wikipedia.org/wiki/Storming_of_the_Bastille" }, answered: false },
  { subject: "History", question: "In what year did the United States declare independence?", answer: { text: "1776", link: "https://en.wikipedia.org/wiki/Declaration_of_Independence" }, answered: false },
  { subject: "History", question: "Which conflict was fought between the North and South in the United States?", answer: { text: "The American Civil War", link: "https://en.wikipedia.org/wiki/American_Civil_War" }, answered: false },
  { subject: "History", question: "Which country was once known as Persia?", answer: { text: "Iran", link: "https://en.wikipedia.org/wiki/Iran" }, answered: false },
  { subject: "History", question: "What was the name of the first artificial satellite launched into space?", answer: { text: "Sputnik", link: "https://en.wikipedia.org/wiki/Sputnik_1" }, answered: false },
  { subject: "History", question: "What year did the American Revolution end?", answer: { text: "1783", link: "https://en.wikipedia.org/wiki/American_Revolution" }, answered: false },
  { subject: "History", question: "Which ancient city was destroyed by the eruption of Mount Vesuvius?", answer: { text: "Pompeii", link: "https://en.wikipedia.org/wiki/Pompeii" }, answered: false },
  { subject: "History", question: "Who was the first president of South Africa after apartheid?", answer: { text: "Nelson Mandela", link: "https://en.wikipedia.org/wiki/Nelson_Mandela" }, answered: false },
  { subject: "History", question: "What was the name of the first human-made object to land on the moon?", answer: { text: "Luna 2", link: "https://en.wikipedia.org/wiki/Luna_2" }, answered: false },
  { subject: "History", question: "What year did the Magna Carta sign?", answer: { text: "1215", link: "https://en.wikipedia.org/wiki/Magna_Carta" }, answered: false },
  { subject: "History", question: "Which famous event occurred on December 7, 1941?", answer: { text: "The Attack on Pearl Harbor", link: "https://en.wikipedia.org/wiki/Attack_on_Pearl_Harbor" }, answered: false },
  { subject: "History", question: "Who was the king of France during the French Revolution?", answer: { text: "Louis XVI", link: "https://en.wikipedia.org/wiki/Louis_XVI_of_France" }, answered: false },
  { subject: "History", question: "Who led the Indian independence movement?", answer: { text: "Mahatma Gandhi", link: "https://en.wikipedia.org/wiki/Mahatma_Gandhi" }, answered: false },
  { subject: "History", question: "What empire did Julius Caesar rule over?", answer: { text: "The Roman Empire", link: "https://en.wikipedia.org/wiki/Roman_Empire" }, answered: false },
  { subject: "History", question: "Which empire was ruled by Genghis Khan?", answer: { text: "The Mongol Empire", link: "https://en.wikipedia.org/wiki/Mongol_Empire" }, answered: false },
  { subject: "History", question: "What year did Christopher Columbus first arrive in the Americas?", answer: { text: "1492", link: "https://en.wikipedia.org/wiki/Christopher_Columbus" }, answered: false },
  { subject: "History", question: "Which event started the Cold War?", answer: { text: "The end of World War II", link: "https://en.wikipedia.org/wiki/Cold_War" }, answered: false },
  { subject: "History", question: "Who was the first emperor of China?", answer: { text: "Qin Shi Huang", link: "https://en.wikipedia.org/wiki/Qin_Shi_Huang" }, answered: false },
  { subject: "History", question: "Who discovered America in 1492?", answer: { text: "Christopher Columbus", link: "https://en.wikipedia.org/wiki/Christopher_Columbus" }, answered: false },
  { subject: "History", question: "Which country was responsible for the invasion of Poland in 1939?", answer: { text: "Nazi Germany", link: "https://en.wikipedia.org/wiki/Polish_campaign_of_1939" }, answered: false },
  { subject: "History", question: "What year did the French Revolution begin?", answer: { text: "1789", link: "https://en.wikipedia.org/wiki/French_Revolution" }, answered: false },
  { subject: "History", question: "Which conflict was fought between the United States and Great Britain in 1812?", answer: { text: "The War of 1812", link: "https://en.wikipedia.org/wiki/War_of_1812" }, answered: false },
  { subject: "History", question: "Which U.S. president was impeached in 1998?", answer: { text: "Bill Clinton", link: "https://en.wikipedia.org/wiki/Bill_Clinton" }, answered: false }
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
const wikiLink = document.getElementById('wiki-link');
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
  cardBack.textContent = filteredCards[currentIndex].answer.text;
  wikiLink.innerHTML = `<a href="${flashcard.wikiLink}" target="_blank" class="wiki-link">Learn more on Wikipedia</a>`;
  wikiLink.classList.add('wiki-link');
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
