import { Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/Login"
import { BrowserRouter } from "react-router-dom"
import AppLayout from "../layouts/AppLayout"
import MainLayout from "../layouts/MainLayout"
import Header from "../components/Header"
import { CartProvider } from "../context/CartContext"
import Contact from "../pages/Contact"
import Service from "../pages/Sevice"
import Home from "../pages/Home"
import Cart from "../pages/Cart"
import { AuthProvider } from "../context/AuthContext"
import PrivateRoute from "./PrivateRoute"
import "../constants/constants"

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <CartProvider>
                        <Routes>
                            <Route path="/" element={<AppLayout />} >
                                <Route path="LOGIN" element={<Login />} />
                                <Route index element={<Navigate to="LOGIN" replace />} />
                                <Route element={<MainLayout />}>
                                    <Route path="HEADER" element={<Header />} />
                                    <Route path="HOME" element={< Home />} />
                                    <Route element={<PrivateRoute />}>
                                        <Route path="CART" element={<Cart />} />
                                        <Route path="SERVICE" element={<Service />} />
                                        <Route path="CONTACT" element={<Contact />} />
                                    </Route>
                                </Route>
                            </Route>
                        </Routes>
                    </CartProvider>
                </AuthProvider>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes

