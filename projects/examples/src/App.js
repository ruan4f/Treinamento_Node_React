import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import AutoComplete from './components/AutoComplete';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          
        </Switch>
      </Router>
      
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