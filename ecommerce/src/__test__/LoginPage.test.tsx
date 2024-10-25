import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import Login from "../pages/Login"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { AuthContextProps } from "../types/authContextType"
import { ApiService } from "../service/ApiService"
import { EMAIL, PASSWORD } from "../constants/constants" 

jest.mock("react-router-dom", () => ({
    useNavigate: jest.fn()
}))

jest.mock("../service/ApiService")

const mockAuthDispatch = jest.fn()
const mockContextValue: AuthContextProps = {
    isAuthenticated: false,
    dispatch: mockAuthDispatch
}

describe("Login", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate)

    const originalConsoleLog = console.log
    beforeAll(() => {
        console.log = jest.fn()
    })

    afterAll(() => {
        console.log = originalConsoleLog
    })

    beforeEach(() => {
        jest.clearAllMocks()

        render(
            <AuthContext.Provider value={mockContextValue}>
                <Login />
            </AuthContext.Provider>
        )
    })

    test("Rendering Email address label", () => {
        expect(screen.getByText(/Email address/i)).toBeInTheDocument()
    })

    test("Rendering Password label", () => {
        expect(screen.getByText(/Password/i)).toBeInTheDocument()
    })

    test("Rendering placeholders", () => {
        expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Enter your password")).toBeInTheDocument()
    })

    test("Initial input values should be empty", () => {
        const emailInput = screen.getByPlaceholderText("Enter your email") as HTMLInputElement
        const passwordInput = screen.getByPlaceholderText("Enter your password") as HTMLInputElement

        expect(emailInput.value).toBe("")
        expect(passwordInput.value).toBe("")
    })

    test("Does not allow login when fields are empty", async () => {
        const submitButton = screen.getByRole("button", { name: /sign in/i })
        fireEvent.click(submitButton)
        await waitFor(() => {
            expect(screen.getByText(/Email is required/i)).toBeInTheDocument()
            expect(screen.getByText(/Password is required/i)).toBeInTheDocument()
        })
    })

    test("Successful login", async () => {
        (ApiService.post as jest.Mock).mockResolvedValue({
            data: { entity: { accessToken: "mockAccessToken" } }
        })

        fireEvent.change(screen.getByPlaceholderText("Enter your email"), {
            target: { value: EMAIL },
        })
        fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
            target: { value: PASSWORD }
        })

        const submitButton = screen.getByRole("button", { name: /sign in/i })
        fireEvent.click(submitButton)

        await waitFor(() => {
            expect(ApiService.post).toHaveBeenCalledWith("/auth/authenticate", {
                username: EMAIL, 
                password: PASSWORD
            })

            expect(mockAuthDispatch).toHaveBeenCalledWith({ type: "LOGIN" })

            expect(mockNavigate).toHaveBeenCalledWith("/home")

            expect(localStorage.getItem("accessToken")).toBe("mockAccessToken")
        })
    })

    test("Failed login", async () => {
        (ApiService.post as jest.Mock).mockRejectedValue(new Error("Invalid credentials"))

        fireEvent.change(screen.getByPlaceholderText("Enter your email"), {
            target: { value: "invalid@i2i.com" }
        })
        fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
            target: { value: "wrongpassword" }
        })

        const submitButton = screen.getByRole("button", { name: /sign in/i })
        fireEvent.click(submitButton)

        await waitFor(() => {
            expect(console.log).toHaveBeenCalledWith(expect.any(Error))
        })
    })
})
