import React from 'react';

const Deck = (props) => {
  console.log('these are the props of Deck', props)
  return (
      <img className="deck col-xs-3 thumbnail" onClick={props.handleDeckClick} src="https://www.explodingkittens.com/img/shared/ek-kitty-simple.svg">
      </img>
  )
};

export default Deck;