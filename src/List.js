import React from 'react';
import Card from './Card';

function List(header, cards) {
  return (
    <React.Fragment>
      <section className="list">
        <header>
          <h2>{header}</h2>
        </header>
        <div className="list-cards">
          
        </div>
      </section>
    </React.Fragment>
  );
}

export default List;