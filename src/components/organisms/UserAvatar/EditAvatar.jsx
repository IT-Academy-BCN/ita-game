import ButtonEditAvatar from '../../atoms/ButtonEditAvatar'
import UserAvatar from './UserAvatar'

function EditAvatar() {
  return (
    <div className="bg-lime-200">
      PageAvatar
      <div className="w-1/6 absolute right-0">
        <ButtonEditAvatar />
      </div>
      <UserAvatar className="w-32 h-32" userId={2} />
    </div>
  )
}

export default EditAvatar
