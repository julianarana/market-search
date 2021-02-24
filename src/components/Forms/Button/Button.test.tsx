import React from 'react';
import { Button } from './Button';
import { fireEvent, render } from '@testing-library/react';
import { IconType } from 'src/components/Icon';

describe('Button', () => {
  it('should render', () => {
    const text = "Some value here"
    const { queryByText } = render(<Button>{text}</Button>);
    expect(queryByText(text)).toBeTruthy();
  });

  it('should render without an icon', () => {
    const { queryByTestId } = render(<Button>Some example</Button>);
    expect(queryByTestId('icon')).toBeFalsy();
  });

  it('should render with the icon', () => {
    const { queryByTestId } = render(<Button icon={IconType.SEARCH}></Button>);
    expect(queryByTestId('icon')).toBeTruthy();
  });

  it('should call onClick when the button is clicked', () => {
    const clickHandler = jest.fn();
    const { queryByTestId } = render(<Button icon={IconType.SEARCH} onClick={clickHandler}></Button>);
    fireEvent.click(queryByTestId('button'));
    expect(clickHandler).toHaveBeenCalled();
  });
});
