import React from 'react';
import { render } from '@testing-library/react';
import Results from './Results.jsx';

describe('Results component snapshot', () => {
  it('Renders a Results component on the page', () => {
    const data = [{ json: 'json' }];
    const { asFragment } = render(<Results data={data}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
