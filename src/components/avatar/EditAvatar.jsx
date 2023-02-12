import ButtonEditAvatar from './components/ButtonEditAvatar'
import Avatar from './AvatarEdition'
import AvatarProvider from './store/context'

function EditAvatar() {


  return (
    <AvatarProvider>
      <div className="relative w-32">
        <ButtonEditAvatar
          className="absolute z-10 right-2 -top-3"
        />
        <Avatar />
      </div>
    </AvatarProvider>
  )
}

export default EditAvatar
