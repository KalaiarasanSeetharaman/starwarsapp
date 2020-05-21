
export const commonReducer = (currentState,action) =>{
  switch (action.type) {
    case 'SETLOADER':
    return {...currentState,isloader:action.value};
    case 'SIGNIN':
    return {...currentState, isloggedIn:true}
    default:
      throw new Error('Should not get there!');
  }
};


export const userReducer = (currentState,action) =>{
  switch (action.type) {
    case 'SETUSER':
    return {currentuser:action.data};
    default:
      throw new Error('Should not get there!');
  }
};

