// rootReducer.js
import { combineReducers } from 'redux';
import employeeReducer from '../reducers/employeReducer'; 
import navigationReducer from '../reducers/navigationReducer';
const rootReducer = combineReducers({
  employeeReducer,
  navigationReducer

});

export default rootReducer;
