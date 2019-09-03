import React from 'react';
import Card from './Card';
import './styles/list.css';

function List(props) {
  console.log(props);
  const cardElements = props.cards.map(card => (
    <Card key={card.id} title={card.title} content={card.content} />
  ));
  
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {cardElements}
      </div>
    </section>
  );
}

export default List;