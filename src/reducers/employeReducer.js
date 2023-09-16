// employeeReducer.js
const initialState = {
    employees: [], // Initialize with an empty array
    
  };
  
  const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EMPLOYEE':
        return {
          ...state,
          employees: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default employeeReducer;
  