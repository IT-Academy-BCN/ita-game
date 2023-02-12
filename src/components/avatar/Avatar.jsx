import ButtonEditAvatar from './components/ButtonEditAvatar'
import AvatarEdition from './AvatarEdition'
import AvatarProvider from './store/context'

function Avatar() {


  return (
    <AvatarProvider>
      <div className="relative w-32">
        <ButtonEditAvatar
          className="absolute z-10 right-2 -top-3"
        />
        <AvatarEdition />
      </div>
    </AvatarProvider>
  )
}

export default Avatar
