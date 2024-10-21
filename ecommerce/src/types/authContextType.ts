export interface Action {
    type: string
    payload?: string
}

export interface AuthContextProps {
    isAuthenticated: boolean,
    dispatch: (action : Action) => void
}