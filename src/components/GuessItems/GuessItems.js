import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessItems({ guessItems }) {
  const noOfIndex = guessItems.length - 1;
  return <div className='guess-results'>
    {range(NUM_OF_GUESSES_ALLOWED).map((i) => {
      return (
        <p className='guess'>{noOfIndex > i ? range(6).map(c => <span className='cell'></span>) : guessItems[i].split('').map(t => <span className='cell'>{t}</span>)}</p>
      )
    })}
    {guessItems.map((item) => <p key={item.id} className='guess'>{item.guess}</p>)}
  </div>;
}

export default GuessItems;
