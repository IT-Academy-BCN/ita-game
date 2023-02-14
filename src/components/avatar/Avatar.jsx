import AvatarEdition from './AvatarBase'
import AvatarProvider from './store/context'
import AvatarEditionButton from './AvatarEditonButton'

function Avatar({ edit, className }) {
  return (
    <AvatarProvider>
      <div className="relative w-32">
        {edit ? <AvatarEditionButton className={className} /> : <AvatarEdition className={className} />}
      </div>
    </AvatarProvider>
  )
}

export default Avatar
