import React, { Component } from 'react';

// import { Container } from './styles';

import './dynamicList.css';

const data = [
  {
    id: 1,
    description: 'Paciente de Teste',
    log: 'Cadastro teste'
  },
  {
    id: 2,
    description: 'Paciente de Teste',
    log: 'Edição teste'
  },
  {
    id: 3,
    description: 'Paciente de Teste',
    log: 'Edição de dados de testes'
  },
  {
    id: 4,
    description: 'Paciente de Teste',
    log: 'Mais modificação para testes'
  },
  {
    id: 5,
    description: 'Paciente de Teste',
    log: 'Atualização de dados cadastrais'
  },
]

export default class DynamicList extends Component {

  state = {
    list: data
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(item => <li key={item.id}>{item.description}</li>)}
        </ul>
      </div>
    );
  }
}
