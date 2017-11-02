import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/root-reducer';
import mySagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const devTools = window
                  .__REDUX_DEVTOOLS_EXTENSION__ && window
                  .__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools, applyMiddleware(sagaMiddleware));

mySagas.forEach(saga=>sagaMiddleware.run(saga));

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
  , document.getElementById('root'));
registerServiceWorker();
