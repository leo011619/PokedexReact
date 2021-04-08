import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
  const { id, name, sprite, type, height, weight, ability0, ability1 } = pokemon;

  return (
    <section className="detail-view">

    <div class="sprite-image">
    {sprite ? <img src={sprite} alt="sprite"/> : null}
    </div>
   
      
      <div className='data-wrapper'>
        <h1 className='data-name'>ID: {id} {name}</h1>
        <p className="data-char">Tipo: {type} - Altura: {height * 10} cm - Peso: {weight / 10} kg</p>
        <div className="data-char">Habilidades:</div>
        <div className="data-abilities"> {ability0} - </div>
        <div className="data-abilities"> {ability1} - </div>

      </div>
    </section>
  )
}

export default DetailView;