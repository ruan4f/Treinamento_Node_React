import React, { Component } from 'react';
import Autocomplete from '../../components/AutoComplete';

// import { Container } from './styles';

import './searchSelect.css';

export default class SearchSelect extends Component {
  render() {
    return (
        <Autocomplete
          options={[
            'Papaya',
            'Persimmon',
            'Paw Paw',
            'Prickly Pear',
            'Peach',
            'Pomegranate',
            'Pineapple'
          ]}
        />
    );
  }
}


