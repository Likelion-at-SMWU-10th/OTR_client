import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from './pages/components/ScrollTop';

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.withCredentials = true;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollTop/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
