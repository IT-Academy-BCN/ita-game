import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { inputs } from '../components/atoms/input/Input';
import Input from '../components/atoms/input/Input';
import Swal from 'sweetalert2';

const API_URL = 'https://itacademy.onrender.com/api/users';

// TODO: informar el usuario ha sido o no registrado
function Register() {
  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [state, setState] = useState({
    loading: false,
    errorMessage: null,
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const showAlert = ({ message }) =>
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name: values.name,
      surname: values.surname,
      email: values.email,
      password: values.password,
      framework: '',
      ITApoints: 0,
      ITAawards: [],
      activities: 0,
    };
    try {
      setState((prev) => ({ ...prev, loading: true }));
      await axios.post(API_URL, user);
      setState((prev) => ({ ...prev, loading: false }));
      navigate('/login');
    } catch (err) {
      setState(prev => ({ ...prev, errorMessage: err, loading: false }));
      showAlert(state.errorMessage);
      console.log(err);
      // TODO: implement better way of error handling
    }
  };

  const inputArray = inputs(values.password);

  return (
    <div className="flex min-h-screen justify-center pt-20 px-4">
      <div className="flex flex-col justify-between w-full max-w-xs">
        <div className="w-full max-w-xs">
          <div className="pb-3.5">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Registro
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="grid gap-3 rounded-md shadow-sm">
              {inputArray.map((input) => (
                <Input
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
            </div>
            <div className="pt-4">
              <button type="submit" className="btn btn-block btn-primary">
                <span className="font-bold">
                  {state.loading ? 'Loading...' : 'Registrarme'}
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center pb-10">
          <Link
            to="/login"
            className="font-bold text-black hover:text-indigo-500 underline"
          >
            ¿Tienes una cuenta?,entrar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
