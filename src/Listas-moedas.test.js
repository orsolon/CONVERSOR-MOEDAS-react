import React from 'react';
import ReactDom from 'react-dom';
import ListarMoedas from './Listar-moedas';
import { faItalic } from '@fortawesome/free-solid-svg-icons';

describe('Teste do componente de listagem de moedas', () =>{
    it('deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDom.render(<ListarMoedas />, div);
        ReactDom.unmountComponentAtNode(div);
    });
    
});