import React from 'react';

function GuessItems({ guessItems }) {

  return <div className='guess-results'>
    {guessItems.map((item) => <p key={item.id} className='guess'>{item.guess}</p>)}
  </div>;
}

export default GuessItems;
