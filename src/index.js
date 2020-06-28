import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {HashRouter as Router} from 'react-router-dom';
//import thunk from 'redux-thunk';
//import composeWIthDevTools from 'redux-devtools-extension/developmentOnly'

//const middleware=[thunk];
const initialState={};
const store=createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}><Router><App/></Router></Provider>,document.querySelector('#root'))