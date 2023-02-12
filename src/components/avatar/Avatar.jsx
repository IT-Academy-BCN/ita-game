import ButtonEditAvatar from './components/ButtonEditAvatar'
import AvatarEdition from './AvatarEdition'
import AvatarProvider from './store/context'

function Avatar({ edit }) {
  return (
    <AvatarProvider>
      <div className="relative w-32">
        {edit ? (
          <>
            <ButtonEditAvatar className="absolute z-10 right-2 -top-3" />
            <AvatarEdition />
          </>
        ) : (
          <AvatarEdition />
        )}
      </div>
    </AvatarProvider>
  )
}

export default Avatar
