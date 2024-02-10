import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: '¿Cuál es el mejor gusto de helado del mundo?🍦',
    options: ['Menta Granizada', 'Frutilla al agua', 'Cheesecake de Leroma'],
    answer: 'Menta Granizada',
  },
  {
    question: '¿Cuál es el mejor capitulo de The Office?📺',
    options: ['Dinner Party', 'Estress Relief', 'The Dundies'],
    answer: 'Estress Relief',
  },
  {
    question: '¿Sushi o Gohan?🍣',
    options: ['Sushi', 'Gohan'],
    answer: 'Sushi',
  },
  {
    question: 'La pizza, ¿Se come con cubiertos?🍕',
    options: ['Claro que si', 'Claro que no'],
    answer: 'Claro que no',
  },
  {
    question: 'Finalmente, ¿Quién fue el último que perdio en nuestro saludo?👐',
    options: ['Bruno', 'Bruno otra vez', 'Brunito' ,'Magui'],
    answer: 'Bruno otra vez',
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const startGame = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="App">
      {currentQuestion === null ? (
        <div className='div-titulo'>
          <h1 className='titulo'>Un jueguito para mi gamer favorito</h1>
          <p className='subtitulo'>5 preguntas, 1 punto cada una.</p>
          <p className='reglas'>Si sacas 5 puntos te regalo un Cadbury de frutilla🍫🍓
          <br />Si sacas menos de 5 puntos me debes un Kinder Bueno👀</p>
          <button onClick={startGame} className='boton'>¡Jugar!❤️</button>
        </div>
      ) : currentQuestion < questions.length ? (
        <div className='div-preguntas'>
          <h1 className='titulo'>Pregunta {currentQuestion + 1}</h1>
          <h2 className='pregunta'>{questions[currentQuestion].question}</h2>
          <div className="opciones">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={`opcion ${selectedOption === option ? 'selected' : ''} ${option === 'Magui' ? 'opcion-magui' : ''}`}
              >
                  {option}
              </button>
            ))}
          </div>
          <button onClick={handleNextQuestion} className='boton' disabled={!selectedOption}>Siguiente❤️</button>
        </div>
      ) : (
        <div className='div-titulo'>
          <h1 className='titulo'>¡Juego terminado!</h1>
          <p className='subtitulo'>Puntaje final: {score}/{questions.length}😄</p>
          <p className='mensaje'>Feliz San Valentin🥺 Te quiero mucho!💘</p>
        </div>
      )}
    </div>
  );
}

export default App;
