 
  import {
    sayHiOnDispatch,
    includeMeaningOfLife
  } from './../exampleAddons/enhancers'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import { print1, print2, print3 } from './../exampleAddons/middleware'

const middlewareEnhancer = applyMiddleware(print1, print2, print3)

// Pass enhancer as the second arg, since there's no preloadedState

// import { createStore, compose } from 'redux'
// import rootReducer from './reducer'







let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}

// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

// const store = createStore(rootReducer, preloadedState, composedEnhancer)

const store = createStore(rootReducer,preloadedState, middlewareEnhancer)

 

// const store = createStore(rootReducer)

export default store