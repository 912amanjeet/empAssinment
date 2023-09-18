const initialState = {
    employees: [], // Initialize with an empty array
    favoriteEmployees: [],
  };
  
  const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EMPLOYEE':
        return {
          ...state,
          employees: action.payload,
        };
      
    case 'UPDATE_FAVORITE_EMPLOYEES':
      return {
        ...state,
        favoriteEmployees: action.payload,
      };

      default:
        return state;
    }
  };
  
  export default employeeReducer;
  