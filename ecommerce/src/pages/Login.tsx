import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import Input from "../components/Input"

const Login = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const {login} = useContext(AuthContext)!

	const handleclick = (e: any) => {
		e.preventDefault()
		if (email === "demo@i2i.com" && password === "demo") {
			login()
			navigate('/home')
		} else {
			alert("Invalid email/password")
		}
	}

	return (
		<>
			<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST">
						<div>
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
							<div className="mt-2">
								<Input id="email" name="email" type="email" autoComplete="email"
									value={email} onChange={(e) => setEmail(e.target.value)} >
								</Input>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
								<div className="text-sm">
									<a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
								</div>
							</div>
							<div className="mt-2">
								<Input id="password" name="password" type="password" autoComplete="current-password"
									value={password} onChange={(e) => setPassword(e.target.value)}>
								</Input>
							</div>
						</div>

						<div>
							<button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								onClick={handleclick}>Sign in</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Login
