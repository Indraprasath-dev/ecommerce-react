import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../pages/Login";
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe("Login", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    beforeEach(() => {
        render(
            <Login />
        );
    });

    test("Rendering Email address label", () => {
        expect(screen.getByText(/Email address/i)).toBeInTheDocument();
    });

    test("Rendering Password label", () => {
        expect(screen.getByText(/Password/i)).toBeInTheDocument();
    });

    test("Rendering placeholders", () => {
        expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Enter your password")).toBeInTheDocument();
    });

    test("Initial input values should be empty", () => {
        const nameInput = screen.getByPlaceholderText("Enter your email") as HTMLInputElement;
        const passwordInput = screen.getByPlaceholderText("Enter your password") as HTMLInputElement;

        expect(nameInput.value).toBe("");
        expect(passwordInput.value).toBe("");
    });

    test("Does not allow login when fields are empty", async () => {
        const submitButton = screen.getByRole("button", { name: /sign in/i });
        fireEvent.click(submitButton);
        await waitFor(() => {
            expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
        });
    });
    
    

});