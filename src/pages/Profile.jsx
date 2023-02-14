import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../store/authentication/AuthContext'
import { Actions } from '../store/authentication/AuthReducer'
import { FooterMenu, Navbar } from '../components'
import { Card, Title } from '../components/atoms/index'
import Badge from '../components/atoms/Badge'
import { Modal } from '../components/molecules'
import { useNavigate } from 'react-router-dom'
import folder from '../components/assets/images/folder-dynamic.png'
import gym from '../components/assets/images/gym-dynamic-clay.png'
import rocket from '../components/assets/images/rocket-dynamic.png'
import sun from '../components/assets/images/sun-dynamic.png'
import ButtonEdit from '../components/profile/ButtonEdit'
import user from '../components/profile/mocks/user.json'
import ProgressBar from '../components/profile/ProgressBar'
import { Avatar } from '../components/avatar'

// TODO:
// LOGIC: refactor into smaller components/ endpoint Itaawards with images/Protecte Route
// UI:Grid on 'Insignias Ganadas' Cards
function Profile() {
  const [nextMultiple, setNextMultiple] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    setNextMultiple(Math.ceil(user.ITApoints / 50) * 50)
  }, [])

  const handleLogout = () => {
    localStorage.clear()
    let user = localStorage.getItem('currentUser')
    dispatch({ type: Actions.LOGOUT, payload: user })
    navigate('/')
  }

  // Fake user to obtain SVG and Data for looping
  const fakeUser = {
    ITAawards: [
      { name: 'Solete', img: sun, text: '+5 dudas' },
      { name: 'Megamind', img: folder, text: '+3 wikis' },
      { name: 'Imparable', img: rocket, text: '+2 explicaciones' }
    ],
    pendingAwards: ['Coordinator']
  }

  return (
    <>
      <Navbar>Perfil</Navbar>
      <div className="h-screen pt-10 mb-15">
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
              {/* edition */}
              <div className="w-1/6 absolute right-0">
                <ButtonEdit />
              </div>
            </div>
            {/* card body */}
            <div className="flex flex-col mt-20 ">
              {/* progressbar  container*/}
              <div className="flex flex-col ">
                {/* bar */}
                <Avatar className="w-52 h-52"/>
                <ProgressBar
                  className="progress progress-primary"
                  value={user.ITApoints}
                />
                {/* <progress
                  className="progress progress-primary w-100"
                  value={(user.ITApoints * 100) / nextMultiple}
                  max="100"
                ></progress> */}
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
            {fakeUser.ITAawards.map(a => {
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
