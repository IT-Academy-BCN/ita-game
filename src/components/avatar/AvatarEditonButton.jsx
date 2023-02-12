import AvatarEdition from './AvatarEdition'
import ButtonEditAvatar from './components/ButtonEditAvatar'

export default function AvatarEditionButton() {
  return (
    <>
      <ButtonEditAvatar className="absolute z-10 right-2 -top-3" />
      <AvatarEdition />
    </>
  )
}
