import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
     const list = {
      arr: [
        {
          id: '1',
          header: 'First list',
          cardIds: [ 'a'],
        },
       ],
       allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      }
    
     }
     const cardsForIds = function(arr) {
      return arr.map(id =>  arr.allCards[id])
    };
    ReactDOM.render(<List key = {arr[0].id} title = {arr[0].title} content = {arr[0].content}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

describe('<Card />', () => {
    it('renders this UI as expected', () => {
      const tree = renderer.create(<List />).toJSON();
      expect(tree).toMatchSnapshot();
    })
  })