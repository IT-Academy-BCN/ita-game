import AvatarContainer from './AvatarContainer'

export default function Avatar({ className = 'w-32 h-32', ...rest }) {
  return <AvatarContainer className={className} {...rest} />
}
