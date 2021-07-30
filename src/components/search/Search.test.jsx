import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search.jsx';

describe('Search component snapshot', () => {
  it('Renders a search component on the page', () => {
    const { asFragment } = render(<Search/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
