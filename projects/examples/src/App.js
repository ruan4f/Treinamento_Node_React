import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './views/Home/Home';
import SearchSelect from './views/SearchSelect/SearchSelect';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />          
          <Route path="/search-select" component={SearchSelect} />
          <Route path="/search-select" component={SearchSelect} />
        </Switch>
      </Router>     
    </div>
  );
};
export default App;