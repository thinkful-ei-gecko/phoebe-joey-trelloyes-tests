import React from 'react';
import List from './List';
import './App.css';

function App() {
  const lists = 
  [
   {
      header: 'List 1',
      cards: [
        {
          id: 1,
          title: 'Title-1', 
          content: 'Lorem ipsum'
        },
        {
          id: 2,
          title: 'Title-2', 
          content: 'Lorem ipsum'
        },
        {
          id: 3,
          title: 'Title-3', 
          content: 'Lorem ipsum'
        },
      ],
    },
    {
      header: 'List 2',
      cards: [
        {
          id: 1,
          title: 'Title-1', 
          content: 'Lorem ipsum'
        },
        {
          id: 2,
          title: 'Title-2', 
          content: 'Lorem ipsum'
        },
        {
          id: 3,
          title: 'Title-3', 
          content: 'Lorem ipsum'
        },
      ]
    }
  ];
  
  const listElements = lists.map (list => (
    <List header={list.header} cards={list.cards} />
  ));

  return (
    <div className="App">
      {listElements}
    </div>
  );
}

export default App;
