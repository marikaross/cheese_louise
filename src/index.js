import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../src/reducers';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);
const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
