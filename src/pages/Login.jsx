import { useContext, useState } from "react";
import { AuthContext } from "../store/authentication/authContext";
import { Actions } from "../store/authentication/authReducer";

function Login() {
  const [ values, setValues ] = useState({
    email: '',
    password: '',
  })
  const { dispatch } = useContext(AuthContext)

  const handleSubmit = async () => {
    const userCredencials = {email: values.email, password: values.password}
      try {
        dispatch({ type: Actions.LOGIN_START });
        const res = await axios.post(/* "/auth/login", login enpoint */ userCredencials);
        dispatch({ type: Actions.LOGIN_SUCCESS, payload: res.data });
      } catch (err) {
        dispatch({ type: Actions.LOGIN_ERROR });
        console.log('Login failed', err)
        // TODO: implement better error handling
      }
  }

  // TODO: if there is no user inform user about it 

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xs space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
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
                autoComplete="email"
                required
                className="input input-bordered input-info w-full max-w-xs"
                placeholder="Email address"
                value={values.email}
                onChange={(e)=> setValues(prev => ({...prev, email: e.target.value}))}
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
                autoComplete="current-password"
                required
                className="input input-bordered input-info w-full max-w-xs"
                placeholder="Password"
                value={values.password}
                onChange={(e)=> setValues(prev => ({...prev, password: e.target.value}))}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login
