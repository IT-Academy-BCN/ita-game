import Svg from "./Svg";

export default function ButtonCheckbox({ className, modalLink }) {
  return (
    <>
      <label
        htmlFor={modalLink}
        className={`scale-75 btn btn-circle bg-primary ${className}`}
      >
        <Svg className="w-5" />
      </label>
      <input type="checkbox" id={modalLink} className="modal-toggle" />
    </>
  )
}
