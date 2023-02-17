import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../store/authentication/authContext"
import { useNavigate } from "react-router-dom"

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()

  const { login, error } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    login(values)
      .then(() => {
        navigate("/home")
      })
      .catch(() => {
        console.log(error)
      })
  }

  return (
    <div className="flex min-h-screen justify-center pt-20 px-4">
      <div className="flex flex-col justify-between w-full max-w-xs">
        <div className="w-full max-w-xs space-y-8">
          <div className="pb-3.5">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Login
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="grid gap-2 rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="input focus:border-primary-500 w-full max-w-xs"
                  placeholder="Email address"
                  value={values.email}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="input focus:border-primary-500 w-full max-w-xs"
                  placeholder="Contraseña"
                  value={values.password}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, password: e.target.value }))
                  }
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              {/* TODO: activate below functionality */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 font-medium text-black hover:text-indigo-500"
                >
                  Recordar
                </label>
              </div>
              <div className="text-sm">
                {/* TODO: activate below functionality */}
                <Link className="font-medium text-black hover:text-indigo-500 underline">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button type="submit" className="btn btn-block btn-primary">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center pb-10">
          <Link
            to="/register"
            className="font-bold text-black hover:text-indigo-500 underline"
          >
            ¿No tienes una cuenta? Crea una
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
