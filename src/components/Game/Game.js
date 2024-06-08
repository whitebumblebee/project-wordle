import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput/GuessInput';
import GuessItems from '../GuessItems/GuessItems';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessItems, setGuessItems] = React.useState([]);
  return <>
    <GuessItems guessItems={guessItems}/>
    <GuessInput guessItems={guessItems} setGuessItems={setGuessItems}/>
  </>;
}

export default Game;
