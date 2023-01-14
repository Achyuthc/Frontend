import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { render } from "react-dom";                 // add this
import {BrowserRouter as Router} from 'react-router-dom';
render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);