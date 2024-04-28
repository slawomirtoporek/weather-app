import initialState from "./initialState";
import weatherReducer from "./weatherRedux";
import { createStore, combineReducers } from 'redux';

const subreducers = {
  weather: weatherReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
