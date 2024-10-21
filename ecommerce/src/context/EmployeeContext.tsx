import { createContext, ReactNode, useReducer} from "react";
import { Action } from "../types/productType"
import { State, EmployeeContextProps } from "../types/employeeType";

const initialState: State = {
    employees: [],
    page: 1,
    totalPages: 1
}

const defaultEmployeeContextValue = {
    state: initialState,
    dispatch: () => null
}

const employeeReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "FETCH_EMPLOYEES":
            return {
                ...state,
                employees: action.payload.employees,
                totalPages: action.payload.totalPages
            }
        case "SET_PAGE":
            return {
                ...state,
                page: action.payload
            }
        default:
            return state
    }
}

export const EmployeeContext = createContext<EmployeeContextProps>(defaultEmployeeContextValue);

export const EmployeeProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(employeeReducer, initialState)

    return (
        <EmployeeContext.Provider value={{ state, dispatch }}>
            {children}
        </EmployeeContext.Provider>
    )
}