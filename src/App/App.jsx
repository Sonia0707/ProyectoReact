import React, { useState } from 'react';
import './App.css';

import Wishinput from './Wishinput';
import WishList from './WishList';

const initialWishes = [
  { text: 'Travel to the moon', done: false },
  { text: 'Pay the gym', done: true },
  { text: 'Go to the gym', done: false },
  { text: 'Make an intro course to React', done: true },
];

const App = () => {
  const [wishes, setWishes] = useState(initialWishes);
  return (
    <div className="app">
      <h1>My wishlist app</h1>
      <Wishinput onNewWish={(wish) => setWishes([...wishes, wish])} />
      <WishList wishes={wishes} onWishesChange={setWishes} />
      <button
        className="wish-clear"
        type="button"
        onClick={() => setWishes(wishes.filter((wish) => !wish.done))}
      >
        Archive deseos.
      </button>
    </div>
  );
};

export default App;
