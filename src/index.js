import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';


const app = (
     <BrowserRouter>
         <App />
     </BrowserRouter>
)
ReactDOM.render(app, document.getElementById('root'))
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,


reportWebVitals();
