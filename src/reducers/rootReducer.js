// rootReducer.js
import { combineReducers } from 'redux';
import employeeReducer from '../reducers/employeReducer'; // Import your employeeReducer here
import navigationReducer from '../reducers/navigationReducer';
const rootReducer = combineReducers({
  employeeReducer, // Add your reducers here
  navigationReducer
  // Add more reducers if you have them
});

export default rootReducer;
