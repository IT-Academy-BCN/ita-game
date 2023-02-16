import AvatarBase from './AvatarBase'
import AvatarProvider from './store/context'
import AvatarEditionButton from './AvatarEditonButton'

function Avatar({ edit, className, ...rest }) {
  return (
    <AvatarProvider>
      <div className="relative w-32">
        {edit ? <AvatarEditionButton className={className} {...rest} /> : <AvatarBase className={className} {...rest} />}
      </div>
    </AvatarProvider>
  )
}

export default Avatar
