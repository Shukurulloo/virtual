import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Container1 from './components/pages/container1'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <Container1/>
     <Routes>
  <Route path="/container1" element={<Container1 />} /> 
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

