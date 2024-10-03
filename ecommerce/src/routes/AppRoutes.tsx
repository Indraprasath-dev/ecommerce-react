import { Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/Login"
import { BrowserRouter } from "react-router-dom"
import AppLayout from "../layouts/AppLayout"
import MainLayout from "../layouts/MainLayout"
import Products from "../components/Products"
import Header from "../components/Header"
import Cart from "../components/Cart"
import { CartProvider } from "../context/CartContext"
import Service from "../components/Service"
import Contact from "../components/Contact"

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <CartProvider>
                    <Routes>
                        <Route path="/" element={<AppLayout />} >
                            <Route path='/login' element={<Login />} />
                            <Route index element={<Navigate to="/login" replace />} />
                            <Route element={<MainLayout />}>
                                <Route path="/header" element={<Header />} />
                                <Route path="/home" element={< Products />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/service" element={<Service />} />
                                <Route path="/contact" element={<Contact />} />
                            </Route>
                        </Route>
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes

