import React from 'react';

function GuessInput() {
  const [input, setInput] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({guess: input});
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
