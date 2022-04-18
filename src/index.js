import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store'

//virtual 

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>, //redux
  document.getElementById('root') //here
);


reportWebVitals();
