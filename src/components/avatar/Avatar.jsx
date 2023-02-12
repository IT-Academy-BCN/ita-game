import AvatarEdition from './AvatarEdition'
import AvatarProvider from './store/context'
import AvatarEditionButton from './AvatarEditonButton'

function Avatar({ edit }) {
  return (
    <AvatarProvider>
      <div className="relative w-32">
        {edit ? <AvatarEditionButton /> : <AvatarEdition />}
      </div>
    </AvatarProvider>
  )
}

export default Avatar
