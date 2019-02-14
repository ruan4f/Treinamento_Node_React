import React, { Component } from 'react';
import './App.css';
import Autocomplete from './components/Autocomplete';

const App = () => {
  return (
    <div className="App">
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
    </div>
  );
};
export default App;