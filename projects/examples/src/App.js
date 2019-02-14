import React from 'react';
import './App.css';
import AutoComplete from './components/AutoComplete';

const App = () => {
  return (
    <div className="App">
      <AutoComplete
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