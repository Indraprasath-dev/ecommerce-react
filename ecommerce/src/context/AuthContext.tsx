import { createContext, ReactNode, useState } from "react";

import  {AuthContextProps} from "../types/authContextType"

export const AuthContext = createContext<AuthContextProps | undefined>(undefined) 

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    
    const login = () => {
        setIsAuthenticated(true)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login}}>
            {children}
        </AuthContext.Provider>
    )
}


