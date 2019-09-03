import React from 'react';
import List from './List';
import './styles/App.css';

function App(props) {
  const cardsForIds = function(arr) {
    return arr.map(id =>  props.store.allCards[id])
  };

  const listElements = props.store.lists.map (list => (
    <List key={list.id} header={list.header} cards={cardsForIds(list.cardIds)} />
  ));

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {listElements}
      </div>
    </main>
  );
}

export default App;
