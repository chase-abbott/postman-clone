/* eslint-disable max-len */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ResultsContainer from './ResultsContainer.jsx';

describe('ResultsContainer component snapshot', () => {
  it('tests the input ', () => {
    render(<ResultsContainer/>);

    const searchBar = screen.getByTestId('search-bar');
    fireEvent.change(searchBar, { target: { value: 'https://last-airbender-api.herokuapp.com/api/v1/characters' } });
    
  });
});
