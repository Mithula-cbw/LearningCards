const flashcards = [
    { question: "Capital of Japan?", answer: "Tokyo" },
    { question: "Largest ocean?", answer: "Pacific Ocean" },
    { question: "Smallest country?", answer: "Vatican City" },
    { question: "Continent with most countries?", answer: "Africa" }
  ];
  
  let currentIndex = 0;
  
  const flashcard = document.getElementById('flashcard');
  const cardFront = document.getElementById('card-front');
  const cardBack = document.getElementById('card-back');
  const progress = document.getElementById('progress');
  
  function updateCard() {
    cardFront.textContent = flashcards[currentIndex].question;
    cardBack.textContent = flashcards[currentIndex].answer;
    progress.textContent = `Card ${currentIndex + 1} of ${flashcards.length}`;
  }
  
  function goToCard(newIndex) {
    if (flashcard.classList.contains('flipped')) {
      flashcard.classList.remove('flipped');
      // Wait for flip-back animation to complete, then update
      setTimeout(() => {
        currentIndex = (newIndex + flashcards.length) % flashcards.length;
        updateCard();
      }, 300); // Match your flip transition duration (0.3s)
    } else {
      currentIndex = (newIndex + flashcards.length) % flashcards.length;
      updateCard();
    }
  }
  
  document.getElementById('flashcard').addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
  });
  
  document.getElementById('next').addEventListener('click', () => {
    goToCard(currentIndex + 1);
  });
  
  document.getElementById('prev').addEventListener('click', () => {
    goToCard(currentIndex - 1);
  });
  
  flashcard.addEventListener('click', () => {
    document.getElementById('flip').click();
  });
  
  // Initialize
  updateCard();
  