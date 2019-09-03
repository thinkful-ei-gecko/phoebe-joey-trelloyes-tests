import React from 'react';
import Card from './Card';

function List(props) {
  console.log(props);
  const cardElements = props.cards.map(card => (
    <Card key={card.id} title={card.title} content={card.content} />
  ));
  
  return (
    <React.Fragment>
      <section className="list">
        <header>
          <h2>{props.header}</h2>
        </header>
        <div className="list-cards">
          {cardElements}
        </div>
      </section>
    </React.Fragment>
  );
}

export default List;