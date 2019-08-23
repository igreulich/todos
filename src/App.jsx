import React from 'react';

import AppHeader from './pages/AppHeader';
import Body from './pages/Body';

import './App.css';

const todos = [
  {
    name: 'Learn React',
    notes: 'The official React documentation is very good.',
    due: new Date(),
    complete: true,
  },
  {
    name: 'Learn Redux',
    notes: 'Check out the talk by Dan Abramov on Egghead.io.',
    due: new Date(),
    complete: false,
  },
  {
    name: 'Learn to solder',
    notes: 'Remember, you are holding a 650˚ stick.',
    due: new Date(),
    complete: false,
  },
  {
    name: 'Reach the top-shelf',
    notes: 'I am very tall.',
    due: new Date(),
    complete: true,
  },
];

function App() {
  return (
    <div className="App">
      <AppHeader>
        <Body />
      </AppHeader>
    </div>
  );
}

export default App;
