import AvatarEdition from './AvatarBase'
import ButtonEditAvatar from './components/ButtonEditAvatar'

export default function AvatarEditionButton({...rest}) {
  return (
    <>
      <ButtonEditAvatar className="absolute z-10 right-2 -top-3" {...rest} />
      <AvatarEdition  {...rest} />
    </>
  )
}
