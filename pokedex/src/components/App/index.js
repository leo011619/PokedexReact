import Pokemon from '../../Pokemon'
import React, { useState } from 'react';
import PokeList from '../PokeList';
import DetailView from '../DetailView';
import './style.css';

function App() {
  const [pokemon, setPokemon] = useState({})

  const handleOnClick = (id) => {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`).then(res => res.json()).then(data => {
      const pokemonData = new Pokemon(data);
      console.log(data);
      setPokemon(pokemonData);
    })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <PokeList handleOnClick={handleOnClick} />
      <DetailView pokemon={pokemon} />
    </div>
  );

}

export default App;