import React from 'react';
import { Button } from './Button';
import { render } from '@testing-library/react';

describe('Button', () => {
  it('should render', () => {
    const { queryByTestId } = render(<Button>Some value here</Button>);
    expect(queryByTestId('header-component')).toBeFalsy();
  });
});
