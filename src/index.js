import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Library from './pages/Library';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);

if('serviceWorker' in navigator){
   navigator.serviceWorker.register('sw.js')
       .then(() => console.log("pwa start"))
       .catch(() => console.log("pwa error"));
}