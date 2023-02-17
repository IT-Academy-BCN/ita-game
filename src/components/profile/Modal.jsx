import Avatar from 'react-nice-avatar'

export default function Modal({ modalLink }) {
  return (
    <div className="modal">
      <div className="modal-box relative resize w-full h-full">
        <div className="flex justify-center mt-6">
          <Avatar />
        </div>
        <label
          htmlFor="modalprofile"
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
        <h3 className="text-lg font-bold text-center mt-4">EDITAR PERFIL</h3>
        <p className="py-42 flex flex-col items-center">
          <label className="label flex flex-col items-start">
            <span className="label-text-alt mb-2">Nombre</span>
            <input
              type="text"
              placeholder="Joe"
              className="input border-primary input-bordered w-full max-w-xs"
            />
          </label>
          <label className="label flex flex-col items-start">
            <span className="label-text-alt mb-2">Especialidad</span>{' '}
            <input
              type="text"
              placeholder="React"
              className="input border-primary input-bordered w-full max-w-xs"
            />
          </label>
          <button className="btn btn-primary w-2/5 mt-6">Modificar</button>
        </p>
      </div>
    </div>
  )
}
