import ButtonCheckbox from './ButtonCheckbox'
import Modal from './Modal'

function ButtonEditAvatar({ className }) {
  return (
    <>
    <ButtonCheckbox className={className} modalLink="modal-avatar" />
    <Modal modalLink="modal-avatar" />
    </>
  )
}

export default ButtonEditAvatar
