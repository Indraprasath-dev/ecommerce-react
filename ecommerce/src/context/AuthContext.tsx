import { createContext, ReactNode, useState } from "react";

import  {AuthContextProps} from "../types/authContextType"

export const defaultAuthContextValue = {
    isAuthenticated: false,
    login: () => {}
}

export const AuthContext = createContext<AuthContextProps>(defaultAuthContextValue) 

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



