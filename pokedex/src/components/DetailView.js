import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
  const { id, name, sprite, type, height, weight, ability0, ability1 } = pokemon;

  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image' alt="sprite"/>
      <div className='data-wrapper'>
        <h1 className='data-name'>ID: {id} {name}</h1>
        <p className="data-char">Tipo: {type} - Altura: {height * 10} cm - Peso: {weight / 10} kg</p>
        <div className="data-char">Habilidades:</div>
        <div className="data-abilities"> {ability0} - {ability1}</div>

      </div>
    </section>
  )
}

export default DetailView;