import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './component/Home'

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
