import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ConversorMoedas from './Conversor-moedas';
import ConversorMoedas from './Conversor-moedas';
import axiosMock from 'axios';
import '@testing-library/jest-dom/extend-expect';
import axios from './__moks__/axios';

describe('Teste do componengte de conversão de moedas', () => {
  it('renders o componente sem erros', () => {
    const { getByText } = render(<ConversorMoedas />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

});
  it('deve similar uma conversao de moedas', async() => {
    const { findByTestId, getByTextId } = render(<ConversorMoedas />);
    axiosMock.get.mockResolvedValueOnce({
      data: {success: true, rates: { BRL: 4.564292, USD: 1.101049 }}
    });
    fireEvent.click(getByTextId('btn-converter'));
    const modal = await findByTestId('modal');
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(modal).toHaveTextContent('1 BRL = 0.24 USD');
  });

});
