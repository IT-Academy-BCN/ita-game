import AvatarProvider from './store/context'
import AvatarContainer from './AvatarContainer'

export default function Avatar({ className = 'w-32 h-32', ...rest }) {
  return (
    <AvatarProvider>
      <AvatarContainer className={className} {...rest} />
    </AvatarProvider>
  )
}
