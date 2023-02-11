import ButtonEditAvatar from './components/ButtonEditAvatar'
import Avatar from './Avatar'

function EditAvatar() {


  return (
    <div className="relative w-32">
      <ButtonEditAvatar
        className="absolute z-10 right-2 -top-3"
      />
      <Avatar />
    </div>
  )
}

export default EditAvatar
