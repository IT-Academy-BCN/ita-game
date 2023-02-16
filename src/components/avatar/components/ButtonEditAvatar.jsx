import ButtonCheckbox from './ButtonCheckbox'
import Modal from './Modal'

function ButtonEditAvatar({ className, ...rest }) {
  return (
    <>
    <ButtonCheckbox className={className} modalLink="modal-avatar"  {...rest} />
    <Modal modalLink="modal-avatar" />
    </>
  )
}

export default ButtonEditAvatar
