import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  let [counter, setCounter] = useState(0);

  function handleClick(e) {
    const dir = e.currentTarget.getAttribute('data-direction');
    switch (dir) {
      case '+':
        counter++;
        break;
      default:
        counter--;
    }

    setCounter(counter);
  }

  return (
    <>
      Hello again!
      <span>{ counter }</span>
      <button onClick={ handleClick } data-direction="+"> + </button>
      <button onClick={ handleClick } data-direction="-"> - </button>
    </>
  );
}

export default Counter;