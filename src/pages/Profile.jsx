import { FooterMenu, Navbar } from "../components"
import { folder, gym, rocket, sun } from "../components/assets"
import { Card, Title } from "../components/atoms/index"
import Badge from "../components/atoms/Badge"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../store/authentication/AuthContext"
import { Modal } from "../components/molecules"
import { Actions } from "../store/authentication/AuthReducer"
import { useNavigate } from "react-router-dom"

// TODO:
// LOGIC: refactor into smaller components/ endpoint Itaawards with images/Protecte Route
// UI:Grid on 'Insignias Ganadas' Cards
function Profile() {
  const [nextMultiple, setNextMultiple] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const { state, dispatch } = useContext(AuthContext)
  const { user } = state
  const navigate = useNavigate()

  useEffect(() => {
    setNextMultiple(Math.ceil(user.ITApoints / 50) * 50)
  }, [])

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleLogout = () => {
    dispatch({ type: Actions.LOGOUT })
    navigate("/")
  }

  // Fake user to obtain SVG and Data for looping
  const fakeUser = {
    ITAawards: [
      { name: "Solete", img: sun, text: "+5 dudas" },
      { name: "Megamind", img: folder, text: "+3 wikis" },
      { name: "Imparable", img: rocket, text: "+2 explicaciones" },
    ],
    pendingAwards: ["Coordinator"],
  }

  return (
    <>
      <Navbar>Perfil</Navbar>
      <div className="h-screen pt-10 w-full">
        {openModal ? (
          <Modal>
            <div className="flex flex-col">
              <div className="card-title justify-between">
                <Title>Hola {user.name}!</Title>
                <button
                  className="btn btn-circle bg-secondary"
                  onClick={() => setOpenModal(false)}
                >
                  X
                </button>
              </div>
              <button
                className="btn btn-outline btn-primary"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          </Modal>
        ) : (
          ""
        )}
        <div className="p-5  bg-slate-100">
          <Card>
            {/*  card profile header */}
            <div className="flex flex-row w-100 justify-center relative mb-20">
              {/* avatar box */}
              <div className="flex flex-col justify-center items-center absolute ">
                {/* avatar*/}
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full p-10">
                    <span className="text-xs">AA</span>
                  </div>
                </div>
                {/* name */}
                <div className="text-black font-bold ">
                  {user.name} {user.surname}
                </div>
                {/* dev position */}
                <div className="text-neutral-focus font-bold">
                  {user.framework}
                </div>
              </div>
              {/* edit */}
              <div className="w-1/6 absolute right-0">
                <button
                  className="btn btn-circle bg-primary"
                  onClick={handleOpenModal}
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.06 6.67091L11.98 7.61674L2.92 16.9311H2V15.9853L11.06 6.67091V6.67091ZM14.66 0.481873C14.41 0.481873 14.15 0.58468 13.96 0.780016L12.13 2.6614L15.88 6.5167L17.71 4.63531C18.1 4.23436 18.1 3.58667 17.71 3.18572L15.37 0.780016C15.17 0.5744 14.92 0.481873 14.66 0.481873V0.481873ZM11.06 3.76145L0 15.132V18.9873H3.75L14.81 7.61674L11.06 3.76145V3.76145Z"
                      fill="#323232"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* card body */}
            <div className="flex flex-col mt-20 ">
              {/* progressbar  container*/}
              <div className="flex flex-col ">
                {/* bar */}
                <progress
                  className="progress progress-primary w-100"
                  value={(user.ITApoints * 100) / nextMultiple}
                  max="100"
                ></progress>
                {/* data bar */}
                <div className="flex justify-between">
                  <div className="flex justify-center">
                    <p className="font-bold text-black text-sm">
                      {user.ITApoints} ITAS
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <p className="font-bold text-black text-sm">
                      {nextMultiple - user.ITApoints}
                    </p>

                    <p className="text-neutral-focus font-bold text-sm">
                      para subir de nivel
                    </p>
                  </div>
                </div>
              </div>

              {/* divider section */}
              <div className="flex flex-col">
                <div className="divider before:bg-secondary after:bg-secondary"></div>
                <div className="flex justify-between">
                  <p className="text-black text-base">Actividades Realizadas</p>
                  <p className="text-black text-base">{user.activities}</p>
                </div>
                <div className="divider before:bg-secondary after:bg-secondary"></div>
                <div className="flex justify-between">
                  <p className="text-black text-base">Fecha de alta</p>
                  <p className="text-black text-base">21/12/2022</p>
                </div>
              </div>
            </div>
          </Card>
          <Title>Insignias ganadas</Title>
          <Card direction="row">
            {fakeUser.ITAawards.map((a) => {
              return (
                <Badge
                  classBody="card-body py-0 px-0 gap-0 items-center text-center"
                  classFigure="px-2 pt-4"
                  classTitle="card-title text-black"
                  img={a.img}
                  text={a.text}
                  key={a.name}
                >
                  {a.name}
                </Badge>
              )
            })}
          </Card>
          <Title>Insignias Pendientes</Title>
          <Card>
            <Badge
              classBody="card-body py-0 px-0 gap-0 items-center text-center"
              classFigure="px-2 pt-5"
              classTitle="card-title text-gray-400"
              img={gym}
              text="+3 revisiones código"
            >
              Cordinator
            </Badge>
          </Card>
        </div>
        <FooterMenu />
      </div>
    </>
  )
}
export default Profile
