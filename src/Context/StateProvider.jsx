import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext();
//StateProvider component allows you to access the current state of your components along with the search results
//children is our component
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
)
export const useStatevalue = () => useContext(StateContext)