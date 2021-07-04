import { configureStore } from '@reduxjs/toolkit'
import {createStore, combineReducers ,applyMiddleware, compose} from 'redux';
import UserReducer from './redux/reducers/user.reducer';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducers = combineReducers({
  user: UserReducer
})

const store = createStore(
  reducers
);
export default store;