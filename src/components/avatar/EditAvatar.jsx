import { useState } from 'react'
import ButtonEditAvatar from './ButtonEditAvatar'
import Modal from './Modal'
import UserAvatar from './UserAvatar'

function EditAvatar() {
  const [edition, setEdition] = useState(false)
  const handleEditAvatar = () => {
    setEdition(!edition)
  }

  return (
    <div className="relative w-32">
      <ButtonEditAvatar handleEditAvatar={handleEditAvatar} className="absolute z-10 right-2 -top-3" />
      <UserAvatar />
      {edition && <Modal />}
    </div>
  )
}

export default EditAvatar
