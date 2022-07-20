import React,{createContext, useContext,useReducer} from "react";
import AppReducer from './AppReducer';


//set initial State
const initialState = {
    transactions:[
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 } 
    ]
}

export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            action:'DELETE_TRANSACTION',
            payload:id
        });
    }
    return(
        <GlobalContext.Provider value={
            {
                transactions:state.transactions,
                deleteTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}