import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Initial render.
root.render(
  <Router>
    <App />
  </Router>
);
