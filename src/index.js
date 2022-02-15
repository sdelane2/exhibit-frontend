import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import rootReducer from './Redux/rootReducer'


const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  

  <Provider store={store}>
    <Router>
      <Route>
      <App />
      </Route>
    </Router>
  </Provider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
