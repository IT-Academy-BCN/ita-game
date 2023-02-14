import { useState } from 'react'
import ButtonCheckbox from '../avatar/components/ButtonCheckbox'
import Modal from './Modal'

function ButtonEdit({ handleClick }) {
  return (
    <div>
      <ButtonCheckbox
        className="btn btn-circle bg-primary"
        modalLink="modalprofile"
      />
      <Modal modalLink="modalprofile" />

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="modalprofile" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="modalprofile"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </div>
  )
}

export default ButtonEdit
