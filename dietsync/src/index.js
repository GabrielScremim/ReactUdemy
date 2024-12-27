import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Templates/Home';

import reportWebVitals from './reportWebVitals';
import Header from './Templates/Header';
import SideMenu from './Templates/SideMenu';
import CardDev from './Components/CardDevs';
import Desc from './Components/Descricao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div class="row">
      <div class="col-lg-6">
        <CardDev />
      </div>
      <div class="col-lg-6">
        <Desc />
      </div>
    </div>
    <SideMenu />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
