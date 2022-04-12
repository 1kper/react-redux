import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { Provider } from 'react-redux'

import './api/server'

// Omit existing React imports

import store from './reduxer/store'


// Log the initial state

// {todos: [....], filters: {status, colors}}




// Omit existing React rendering logic



const renderApp=()=>

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/App', renderApp)
}

renderApp()