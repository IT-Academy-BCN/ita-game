import { useContext, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { inputs } from "../components/atoms/input/Input"
import Input from "../components/atoms/input/Input"
import Swal from "sweetalert2"
import { AuthContext } from "../store/authentication/authContext"
import Modal from "../components/molecules/Modal"
import Avatar from 'react-nice-avatar'

// TODO: informar el usuario ha sido o no registrado
function Register() {
  const [values, setValues] = useState({
    name: "",
    surname: "",
    sex: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const navigate = useNavigate()

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const showAlert = ({ message }) =>
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
    })

  const [isChecked, setIsChecked] = useState(false)

  const { register, error } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      name: values.name,
      surname: values.surname,
      email: values.email,
      password: values.password,
      framework: "",
      ITApoints: 0,
      ITAawards: [],
      activities: 0,
      avatar: {
        sex: values.sex,

        hairStyle: "normal",
        hairColor: "#BA4A00",
        faceColor: "#FAD7A0",
        hatStyle: "beanie",
        hatColor: "#F1C40F",
        eyeStyle: "smile", // circle, oval, smile
        glassesStyle: "round", // none, round, square
        noseStyle: "long", //short, long, round
        shirtStyle: "short", // hoody, short, polo
        shirtColor: "#BB8FCE",
        bgColor: "#58c914",
      },
    }
    if (isChecked) {
      register(user)
        .then(() => {
          navigate("/")
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  const inputArray = inputs(values.password)

  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

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
            {openModal ? (
              <Modal>
                <div className="flex flex-col">
                  <div className="card-title justify-between">
                    <h1>Términos y condiciones</h1>
                    <button
                      className="btn btn-circle bg-secondary"
                      onClick={() => setOpenModal(false)}
                    >
                      X
                    </button>
                  </div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illo, omnis voluptatum aut qui temporibus reiciendis,
                  aspernatur necessitatibus velit delectus assumenda
                  exercitationem vero recusandae, voluptate iure eius totam
                  architecto suscipit iusto.
                </div>
              </Modal>
            ) : (
              <>
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
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Pick your avatar</span>
                    <span className="label-text-alt">Woman/Man</span>
                  </label>
                  <div className="flex justify-center">
                    <Avatar />
                  </div>
                </div>
              </>
            )}

            <div className="form-control">
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  onChange={() => setIsChecked(!isChecked)}
                  checked={isChecked}
                />
                <span className="text-black">
                  Acepto{" "}
                  <span
                    className="underline cursor-pointer"
                    onClick={handleOpenModal}
                  >
                    términos legales
                  </span>
                </span>
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className={`btn btn-block btn-primary ${
                  !isChecked && "cursor-not-allowed"
                }`}
              >
                <span className="font-bold">Registrarme</span>
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center pb-10">
          <Link
            to="/"
            className="font-bold text-black hover:text-indigo-500 underline"
          >
            ¿Tienes una cuenta? Entra
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
