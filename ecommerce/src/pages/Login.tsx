import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { EMAIL, HOME, PASSWORD } from "../constants/constants"
import { ApiService } from "../service/ApiService"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const Login = () => {
	const navigate = useNavigate()
	const { dispatch } = useContext(AuthContext)!

	const validationSchema = Yup.object({
		username: Yup.string().email("Invalid email format").required("Email is required"),
		password: Yup.string().required("Password is required")
	})

	const handleSubmit = async (values: { username: string, password: string }) => {
		try {
			const response = await ApiService.post("/auth/authenticate", {
				username: values.username,
				password: values.password
			})

			const accessToken = response.data.entity.accessToken
			localStorage.setItem("accessToken", accessToken)

			if (values.username === EMAIL && values.password === PASSWORD) {
				dispatch({ type: "LOGIN" })
				navigate(HOME)
			} 
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<Formik
					initialValues={{ username: "", password: "" }}
					validationSchema={validationSchema}
					onSubmit={handleSubmit} >
					{({ isSubmitting }) => (
						<Form className="space-y-6">
							<div>
								<label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
									Email address
								</label>
								<div className="mt-2">
									<Field
										id="username"
										name="username"
										type="email"
										placeholder="Enter your email"
										className="form-input w-full p-2 border border-gray-300 rounded" />
									<ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
								</div>
							</div>

							<div>
								<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
									Password
								</label>
								<div className="mt-2">
									<Field
										id="password"
										name="password"
										type="password"
										placeholder="Enter your password"
										className="form-input w-full p-2 border border-gray-300 rounded" />
									<ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
									disabled={isSubmitting} >
									{isSubmitting ? "Signing in..." : "Sign in"}
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}

export default Login
