import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'
import {Link, Route} from "wouter"

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <h1>Gifs variados</h1>
        <Link to='/gif/naruto'>Gifs de Naruto</Link>
        <Link to='/gif/one piece'>Gifs de One Piece</Link>
        <Link to='/gif/overlord'>Gifs de Overlord</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
