import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"
import { LOGIN } from "../constants/constants"

const PrivateRoute = () => {
    const auth = useContext(AuthContext)

    return (auth?.isAuthenticated ? <Outlet /> : <Navigate to={LOGIN} />)
}

export default PrivateRoute

