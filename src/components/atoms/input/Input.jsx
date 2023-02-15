import { useState } from 'react';
import './input.css'
// {/*`input input-bordered input-info w-full max-w-xs`*/}
function Input({
  id,
  name,
  type,
  placeholder,
  label,
  errorMessage,
  onChange,
  ...rest
}) {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
 
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        {...rest}
        id={id}
        name={name}
        type={type}  
        required
        className="input focus:border-primary-500 w-full max-w-xs"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => rest.name === 'confirmPassword' && setFocused(true)}
        focused={focused.toString()}
      />
      <span className="flex hidden items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
        {errorMessage}
      </span>
    </div>
  );
}

export default Input;


//TODO: In the future when we have constants folder I will move this code from here
export const inputs = ({ confirmPatern }) => {
  const inputArray = [
    {
      id: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'Nombre',
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      label: 'name',
      pattern: '^[A-Za-z0-9]{3,16}',
      required: true,
    },
    {
      id: 'surname',
      name: 'surname',
      type: 'text',
      placeholder: 'Apellido',
      errorMessage:
        "Surname should be 3-16 characters and shouldn't include any special character!",
      label: 'surname',
      pattern: '^[A-Za-z0-9]{3,16}',
      required: true,
    },
    {
      id: 'email',
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'email',
      required: true,
    },
    {
      id: 'password',
      name: 'password',
      type: 'password',
      placeholder: 'Contraseña',
      errorMessage:
        'Password should be 8-20 character and include at least 1 letter, 1 number and 1 special character',
      label: 'Password',
      pattern:
        '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
      required: true,
    },
    {
      id: 'confirmPassword',
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Repetir Contraseña',
      errorMessage: "Passwords don't match!",
      label: 'Confirm Password',
      pattern: confirmPatern,
      required: true,
    },
  ];
  return inputArray;
};
