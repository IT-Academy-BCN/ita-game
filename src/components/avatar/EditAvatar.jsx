import ButtonEditAvatar from './ButtonEditAvatar'
import UserAvatar from './UserAvatar'

function EditAvatar() {
  return (
    <div className="relative bg-blue-400 w-36">
      <ButtonEditAvatar className="absolute z-10 right-3 -top-2" />
      <UserAvatar />
    </div>
  )
}

export default EditAvatar
