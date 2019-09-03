import React from 'react';

function Card({title, content}) {
  return (
    <React.Fragment>
      <h3>{title}</h3>
      <p>{content}</p>
    </React.Fragment>
  );
}

export default Card;