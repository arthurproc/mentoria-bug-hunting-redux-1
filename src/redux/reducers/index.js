import { combineReducers } from 'redux';
import timeMachineReducer from './timeMachineReducer';

const rootReducers = combineReducers({
  timeMachine: timeMachineReducer,
});

export default rootReducers;
