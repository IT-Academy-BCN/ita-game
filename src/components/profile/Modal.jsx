import { Avatar } from '../avatar'

export default function Modal({ modalLink }) {
  return (
    <div className="modal">
      <div className="modal-box relative resize w-full max-h-screen">
        <div>
          <Avatar className="w-12 h-12" edit />
        </div>

        <label
          htmlFor="modalprofile"
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
        <h3 className="text-lg font-bold">
          Congratulations random Internet user!
        </h3>
        <p className="py-42">
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </p>
      </div>

    </div>
  )
}
