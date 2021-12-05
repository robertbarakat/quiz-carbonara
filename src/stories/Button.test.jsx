import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PrimaryButton, SecondaryButton } from './Button.stories';

test('Primary Button is rendered', () => {
    render(<PrimaryButton label='Custom Button' />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).not.toBeNull();
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Custom');
    expect(buttonElement.textContent).toEqual('Custom Button');
});

test('onclick handler is called on Primary Button', async () => {
    const onClickSpy = jest.fn();
    render(<PrimaryButton onClick={onClickSpy} />);
    const buttonElement = screen.getByRole('button');
    buttonElement.click();
    expect(onClickSpy).toHaveBeenCalled();
});

test('Secondary Button is rendered', () => {
    render(<SecondaryButton label='Custom Button' />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).not.toBeNull();
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent).toEqual('Custom Button');
});

test('onclick handler is called on Secondary Button', async () => {
    const onClickSpy = jest.fn();
    render(<SecondaryButton onClick={onClickSpy} />);
    const buttonElement = screen.getByRole('button');
    buttonElement.click();
    expect(onClickSpy).toHaveBeenCalled();
});
