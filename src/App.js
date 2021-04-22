import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Portefolio from './components/pages/Portefolio';

function App() {
  return (
      <>
          <Router>
              <Navbar />
              <Switch>
                  <Route path='/Portefolio' exact component={Portefolio} />
                  </Switch>
          </Router>
    </>
  );
}

export default App;
