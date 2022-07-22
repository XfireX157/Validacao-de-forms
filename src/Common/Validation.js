import React,{createContext, useState } from "react";

export const CreateValidation = createContext({})
CreateValidation.displayName = "CreateValidation"

export const CreateValidationContext = ({children}) => {
    


    return(
        <CreateValidation.Provider value={{}}>
            {children}
        </CreateValidation.Provider>
    )
}