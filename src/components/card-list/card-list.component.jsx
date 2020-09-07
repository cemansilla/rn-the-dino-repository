import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = (props) => {
  return <div className="card-list">
    {
      props.dinosaurs.map(dinosaur => <Card key={dinosaur.id} dinosaur={dinosaur}></Card>)
    }
  </div>;
}