export interface Action {
    type: string,
    payload?: any
}

export interface State {
    employees: any[],
    page: number,
    totalPages: number
}

export interface EmployeeContextProps {
    state: State,
    dispatch: (action : Action) => void
}