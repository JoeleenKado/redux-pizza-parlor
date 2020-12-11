import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';

const order = (state=[], action) => {
  if (action.type === 'SUBMIT_ORDER') {
    return action.payload
  }
  return state
}




const pizzaList = (state = [], action) => {
    // TODO - set book list with data from server
    if (action.type === 'GET_PIZZAS') {
      return action.payload;
    }
    return state;
}
   
const reduxStore = createStore(
    combineReducers({
      pizzaList,
    }),
    applyMiddleware(logger)
);
  
  
  ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
  