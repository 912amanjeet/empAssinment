const initialState = {
    initialRoute: 'AddEmployeeButton', 
  };
  
  const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_INITIAL_ROUTE':
        return {
          ...state,
          initialRoute: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default navigationReducer;
  