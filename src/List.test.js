import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
     const header= 'header'; const cards={ title: 'title', content: 'content'};
    ReactDOM.render(<List header = {header} cards={cards} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

describe('<Card />', () => {
    it('renders this UI as expected', () => {
      const tree = renderer.create(<List />).toJSON();
      expect(tree).toMatchSnapshot();
    })
  })