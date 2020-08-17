import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Input from '../../components/Input';

jest.mock('@unform/core', () => {
  return {
    useField: () => {
      return {
        fieldName: 'email',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
  });

  it('should be able to render highlignt on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const inputContainerElement = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await wait(() => {
      expect(inputContainerElement).toHaveStyle('border-color: #ff9000');
      expect(inputContainerElement).toHaveStyle('color: #ff9000');
    });

    fireEvent.blur(inputElement);

    await wait(() => {
      expect(inputContainerElement).not.toHaveStyle('border-color: #ff9000');
      expect(inputContainerElement).not.toHaveStyle('color: #ff9000');
    });
  });

  it('should be able to render highlignt on input when it is filled', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const inputContainerElement = getByTestId('input-container');

    fireEvent.change(inputElement, {
      target: { value: 'johndoe@example.com' },
    });

    fireEvent.blur(inputElement);

    await wait(() => {
      expect(inputContainerElement).toHaveStyle('color: #ff9000');
    });
  });
});
