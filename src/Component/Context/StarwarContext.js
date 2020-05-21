import React,{ createContext, useState, useReducer} from 'react';
import {listReducer, commonReducer, userReducer} from '../User/Reducer/StarwarReducer';
 
export const StarWarContext = createContext();
 
const commonState = {
    isloader:false,
    isloggedIn:false
}

const userState = {
    currentuser:{},
}
 
const StarWarContextProvider = (props) =>{
    const [commondata, dispatchcommon] = useReducer(commonReducer,commonState);
    const [userdata, dispatchuser] = useReducer(userReducer,userState);
    return(
        <StarWarContext.Provider value={{userdata, dispatchuser, commondata, dispatchcommon}}>
            {props.children}
        </StarWarContext.Provider>
    )
 
}
export default StarWarContextProvider;
 
 