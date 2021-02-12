import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './About';
import App from './App';
import Footer from './Footer';
import ImportExport from './ImportExport';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/">
          <App />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/import-export">
          <ImportExport />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
