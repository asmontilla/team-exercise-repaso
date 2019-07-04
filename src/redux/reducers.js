import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk';
import loginReducer from './loginReducer'
import productReducer from './productReducer'

const middleware = applyMiddleware(thunk);

const reducers = combineReducers({
  login: loginReducer,
  product: productReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(middleware));

export default store