import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import {index} from './redux/store/index'
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={index}>
    <App />
  </Provider>
);

