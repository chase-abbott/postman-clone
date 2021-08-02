/* eslint-disable max-len */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RequestContainer from './RequestCointainer.jsx';

// eslint-disable-next-line no-undef
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve()
  });
});


describe('ResultsContainer component snapshot', () => {
  it('tests the input ', async () => {
    render(<RequestContainer/>);

    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    expect(fetch).toHaveBeenCalledTimes(1);
    
  });
});
