import Options from "./Options";

export default function Modal({ modalLink }) {
  return (
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Edita tu Avatar!</h3>
        <p className="py-4">
          Aquí puedes editar tu avatar.
        </p>
        <Options />
        <div className="modal-action">
          <label htmlFor={modalLink} className="btn btn-primary">
            Guarda mi Avatar
          </label>
        </div>
      </div>
    </div>
  )
}
