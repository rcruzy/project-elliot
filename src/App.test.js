import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// use enzyme from here
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('shallowly renders without crashing', () => {
  shallow(<App />);
});
