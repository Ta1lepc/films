import React from 'react'
import Stars from './Components/Stars'
import Films from './assets/films'
import './App.css';

function App() {
  return (
      <div>
          <Stars Films={Films} />
      </div>
  );
}

export default App;
