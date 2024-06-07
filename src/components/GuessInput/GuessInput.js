import React from 'react';

function GuessInput({ guessItems, setGuessItems }) {
  const [input, setInput] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const nextGuessItems = [...guessItems];
    nextGuessItems.push({id: Math.random(), guess: input});
    setGuessItems(nextGuessItems);
    setInput('');
  }
  return (<div>
    <form className="guess-input-wrapper" onSubmit={event => handleSubmit(event)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={input} onChange={event => setInput(event.target.value.toUpperCase())} minLength={5} maxLength={5} pattern="[a-zA-Z]{5}"/>
    </form>
  </div>);
}

export default GuessInput;
