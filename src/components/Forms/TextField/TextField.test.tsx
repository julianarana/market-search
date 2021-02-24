import React from 'react';
import { TextField } from './TextField';
import { fireEvent, render } from '@testing-library/react';

describe('TextField', () => {
  it('should render with the given value', () => {
    const text = 'Some value here';
    const { queryByTestId } = render(<TextField value={text} />);
    expect(queryByTestId('input')).toBeTruthy();
    expect(queryByTestId('input').getAttribute('value')).toBe(text);
  });

  it('should call onChange when the user changes somethign', async () => {
    const text = 'Some value here';
    const result = 'Different value';
    const event = { target: { value: result } };
    const handleChange = jest.fn();
    const { queryByTestId } = render(
      <TextField value={text} onChange={handleChange} />
    );
    const input = queryByTestId('input');
    expect(input).toBeTruthy();
    fireEvent.change(input, event);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(result);
  });
});
