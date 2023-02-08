import UserAvatar from './UserAvatar'
const useId = 1
function EditAvatar() {
  const init = {
    sex: 'man',
    hairStyle: 'mohawk',
    hatStyle: 'beanie', // none, beanie, turban
    hatColor: '#58c914',
    eyeStyle: 'circle', // eyeStyle	string		circle, oval, smile
    glassesStyle: 'square', // glassesStyle	string		none, round, square
    noseStyle: 'short', // noseStyle	string		short, long, round
    shirtStyle: 'short', // shirtStyle	string		hoody, short, polo
    shirtColor: 'teal',
    bgColor: 'transparent'
  }
  return (
    <div className="bg-lime-200">
      PageAvatar
      <UserAvatar className="w-32 h-32" useId={useId} />
    </div>
  )
}

export default EditAvatar
