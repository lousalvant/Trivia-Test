import React, { useState } from 'react';

const Flashcard = ({ card, onNextCard }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    const handleNext = (e) => {
      e.stopPropagation();
      onNextCard();
    };
  
    const getColorByDifficulty = () => {
      switch (card.difficulty) {
        case 'easy':
          return 'lightgreen';
        case 'medium':
          return 'lightgoldenrodyellow';
        case 'hard':
          return 'lightcoral';
        default:
          return 'white';
      }
    };
  
    return (
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div
          className="flashcard-content"
          style={{ backgroundColor: getColorByDifficulty() }}
        >
          <div className="flashcard-front">
            <h2>{card.question}</h2>
          </div>
          <div className="flashcard-back">
            <p>{card.answer}</p>
          </div>
        </div>
        <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    );
  };
  
  export default Flashcard;