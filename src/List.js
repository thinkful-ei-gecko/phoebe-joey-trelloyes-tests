import React from 'react';
import Card from './Card';

function List({header, cards}) {
  const cardElements = cards.map(card => (
    <Card title={card.title} content={card.content} />
  ));
  
  return (
    <React.Fragment>
      <section className="list">
        <header>
          <h2>{header}</h2>
        </header>
        <div className="list-cards">
          {cardElements}
        </div>
      </section>
    </React.Fragment>
  );
}

export default List;