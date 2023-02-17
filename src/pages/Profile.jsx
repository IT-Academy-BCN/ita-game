import user from '../components/profile/mocks/user.json'
import { FooterMenu, Navbar } from '../components'
import folder from '../assets/images/rocket-dynamic.png'
import rocket from '../assets/images/rocket-dynamic.png'
import sun from '../assets/images/sun-dynamic.png'
import EarnBadges from '../components/profile/EarnBadges'
import PendingBadges from '../components/profile/PendingBadges'
import CardProfile from '../components/profile/CardProfile'
import { useGetActivities } from '../hooks'


// TODO:
// LOGIC: refactor into smaller components/ endpoint Itaawards with images/Protecte Route
// UI:Grid on 'Insignias Ganadas' Cards

// Fake user to obtain SVG and Data for looping
const fakeUsers = {
  ITAawards: [
    { name: user.ITAawards[0], img: sun, text: '+5 dudas' },
    { name: user.ITAawards[1], img: folder, text: '+3 wikis' },
    { name: user.ITAawards[2], img: rocket, text: '+2 explicaciones' }
  ],
  pendingAwards: ['Coordinator']
}

function Profile() {
  const { data: activities, isSuccess } = useGetActivities(
    'https://itacademy.onrender.com/api/activity/'
  )

  const userDoneActivitiesPoints = isSuccess
    ? activities
        .filter(activity => activity?.doneBy._id === user._id)
        .map(doneActivity => doneActivity.typeId.points)
    : []

  const totalPoints = userDoneActivitiesPoints.reduce((acc, current) => acc + current, 0)
  const numberUserActivities = userDoneActivitiesPoints.length

  // data from the user.json
  const data = {
    name: user.name,
    surname: user.surname,
    framework: user.framework,
    points: totalPoints,
    activities: numberUserActivities
  }


  return (
    <>
      <Navbar>Perfil</Navbar>
      <div className="min-h-screen pt-12 pb-12">
        <div className="p-5">
          <CardProfile data={data} />
          <EarnBadges fakeUsers={fakeUsers} />
          <PendingBadges fakeUsers={fakeUsers} />
        </div>
        <FooterMenu />
      </div>
    </>
  )
}
export default Profile
