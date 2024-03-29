import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import {BrowserRouter as Router} from 'react-router-dom'
// The entire app get's wrapped with Router, below.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //! root.render, the thing that kicks it all off!
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function to log results (for example: reportWebVitals(console.log)) or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
