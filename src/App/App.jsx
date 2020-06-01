/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './App.css';
import ClassNames from 'classnames';

const wishes = [
  { text: 'Travel to the moon', done: false },
  { text: 'Pay the gym', done: true },
  { text: 'Go to the gym', done: false },
  { text: 'Make an intro course to React', done: true },
];

const App = () => (
  <div className="app">
    <h1>My wishlist app</h1>
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish</legend>
      <input className="wish-input__field" placeholder="Enter your wish here" />
    </fieldset>
    <ul className="wish-list">
      {wishes.map(({ text, done }, i) => (
        <li
          key={text}
          className={ClassNames(
            'wish-list__item ', { 'wish-list__item--done': done },
          )}
        >
          <label htmlFor={`wish${i}`}>
            <input id={`wish${i}`} type="checkbox" defaultChecked={done} />
            {text}
          </label>
        </li>
      ))}
    </ul>
    <button className="wish-clear" type="button">
      Archive deseos.
    </button>
  </div>
);

export default App;
