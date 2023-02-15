import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../store/authentication/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://itacademy.onrender.com/auth/signin'; 

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
<<<<<<< HEAD
  const navigate = useNavigate();

  const { login, error } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(values);
    if (!error) {
      navigate('/');
=======
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChange = ({ target: { name, value } }) => {
    setCredentials(
      Object.assign(Object.assign({}, credentials), { [name]: value })
    );
  };

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      dispatch({ type: Actions.LOGIN_START });
      const res = await axios.post(API_URL, credentials);
      if (res.data) {
        dispatch({ type: Actions.LOGIN_SUCCESS, payload: res.data.user });
        navigate('/');
      }
    } catch (err) {
      dispatch({type: Actions.LOGIN_ERROR, payload: err.message})
      console.log('Login failed', err);
      // TODO: implement better error handling
>>>>>>> 3caa9d445059d49ab47f4215a6de1ef70253ffaa
    }
  };

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
                  value={credentials.email}
                  onChange={onChange}
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
                  value={credentials.password}
                  onChange={onChange}
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
                {state.loading? 'Loading...' : 'Sign in'}
              </button>
            </div>
          </form>
          <h2 className='text-red-700 self-center text-center'>{state.errorMessage && state.errorMessage}</h2>
        </div>
        <div className="flex justify-center pb-10">
          <Link
            to="/register"
            className="font-bold text-black hover:text-indigo-500 underline"
          >
            ¿No tienes una cuenta?,crear una
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
