import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {Router, Route, IndexRoute} from 'react-router'
import createHistory from 'history/createBrowserHistory'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import { ConnectedRouter, syncHistoryWithStore, routerReducer } from 'react-router-redux'
import appReducer from './reducer'
import thunkMiddleware from 'redux-thunk'
import Nav from './containers/Nav'
import './index.css'

const target = document.querySelector('#root')

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)
const store = createStoreWithMiddleware(appReducer)

render(
  <Provider store={store}>
    <Router history={createHistory()}>
        <Nav />
    </Router>
  </Provider>,
  target
)