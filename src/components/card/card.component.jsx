import React from 'react';
import './card.styles.css';

export const Card = (props) => (
  <div className="card-container">
    <img alt="Dino" src={`https://robohash.org/${props.dinosaur.id}?set=set1&size=180x180`} />
    <h2>{props.dinosaur.name}</h2>
    <p>{props.dinosaur.email}</p>
  </div>
)