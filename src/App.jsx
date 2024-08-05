import React, { useState } from 'react';
import Flashcard from './components/flashcard';
import './App.css';

const cardPairs = [
  { question: 'Are you ready?', answer: 'Click next to start 😊', isIntro: true },
  { question: 'What is the capital of France?', answer: 'Paris', difficulty: 'easy' },
  { question: 'How many continents are there?', answer: '7', difficulty: 'easy' },
  { question: 'What is the largest mammal in the world?', answer: 'Blue Whale', difficulty: 'easy' },
  { question: 'Who wrote the play "Romeo and Juliet"?', answer: 'William Shakespeare', difficulty: 'medium' },
  { question: 'In which year did World War II end?', answer: '1945', difficulty: 'medium' },
  { question: 'What is the chemical symbol for gold?', answer: 'Au', difficulty: 'medium' },
  { question: 'Which planet is known as the Red Planet?', answer: 'Mars', difficulty: 'medium' },
  { question: 'What is the speed of light in a vacuum?', answer: '299,792 kilometers per second', difficulty: 'hard' },
  { question: 'Who developed the theory of relativity?', answer: 'Albert Einstein', difficulty: 'hard' },
  { question: 'In which year did the French Revolution begin?', answer: '1789', difficulty: 'hard' },
];

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    // Generate a random index for the next card
    const randomIndex = Math.floor(Math.random() * cardPairs.length);

    // Update the state to show the next card
    setCurrentCardIndex(randomIndex);
  };

  return (
    <div className="app-container">
      <h1>Trivia Test 🧠</h1>
      <h3>How much do you know? Test your knowledge!</h3>
      <p>{`Number of cards: 10 cards`}</p>
      <Flashcard card={cardPairs[currentCardIndex]} onNextCard={handleNextCard} />
    </div>
  );
};

export default App;
