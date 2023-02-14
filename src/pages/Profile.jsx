import { FooterMenu, Navbar } from '../components'
import Badge from '../components/profile/Badge'
import folder from '../components/assets/images/folder-dynamic.png'
import rocket from '../components/assets/images/rocket-dynamic.png'
import sun from '../components/assets/images/sun-dynamic.png'
import ButtonEdit from '../components/profile/ButtonEdit'
import ProgressBar from '../components/profile/ProgressBar'
import { Avatar } from '../components/avatar'
import Title from '../components/profile/Title'
import Card from '../components/profile/Card'
import user from '../components/profile/mocks/user.json'
import SubLabelProgressBar from '../components/profile/SubLabelProgressBar'
import EarnBadges from '../components/profile/EarnBadges'
import PendingBadges from '../components/profile/PendingBadges'

// TODO:
// LOGIC: refactor into smaller components/ endpoint Itaawards with images/Protecte Route
// UI:Grid on 'Insignias Ganadas' Cards
function Profile() {
  const nextMultiple = Math.ceil(user.ITApoints / 50) * 50

  const data = {
    points: user.ITApoints,
    multiple: nextMultiple
  }
  // Fake user to obtain SVG and Data for looping
  const fakeUsers = {
    ITAawards: [
      { name: user.ITAawards[0], img: sun, text: '+5 dudas' },
      { name: user.ITAawards[1], img: folder, text: '+3 wikis' },
      { name: user.ITAawards[2], img: rocket, text: '+2 explicaciones' }
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
                <Avatar />
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
              <div className="flex flex-col w-full">
                {/* bar */}
                <ProgressBar value={user.ITApoints} />
                <SubLabelProgressBar subLabeData={data} />
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

          <EarnBadges fakeUsers={fakeUsers} />
          <PendingBadges fakeUsers={fakeUsers} />
        </div>
        <FooterMenu />
      </div>
    </>
  )
}
export default Profile
