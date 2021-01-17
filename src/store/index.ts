import {createStore, combineReducers} from 'redux';
import appReducer from './appReducer';
import homeReducer from './homeReducer';

let store = createStore(combineReducers({
  app: appReducer,
  home: homeReducer
}));

export default store;
