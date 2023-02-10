import ButtonEditAvatar from './ButtonEditAvatar'
import UserAvatar from './UserAvatar'

function EditAvatar() {
  return (
    <div className="relative w-32">
      <ButtonEditAvatar className="absolute z-10 right-2 -top-3" />
      <UserAvatar />
    </div>
  )
}

export default EditAvatar
