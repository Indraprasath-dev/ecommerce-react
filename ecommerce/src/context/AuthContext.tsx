import { createContext, ReactNode } from "react"
import  {Action, AuthContextProps} from "../types/authContextType"
import { useReducer } from "react"

const authReducer = (state: boolean, action: Action): boolean => {
    switch (action.type) {
        case "LOGIN":
            return true
        case "LOGOUT":
            return false
        default:
            return state
    }
}

export const defaultAuthContextValue = {
    isAuthenticated: false,
    dispatch: () => null
}

export const AuthContext = createContext<AuthContextProps>(defaultAuthContextValue) 

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [isAuthenticated, dispatch] = useReducer(authReducer, false)
    
    return (
        <AuthContext.Provider value={{isAuthenticated, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
