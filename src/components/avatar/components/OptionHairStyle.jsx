import { useHandler } from '../hooks'

function OptionHairStyle() {
  const { handler } = useHandler()

  const options = ['normal', 'thick', 'mohawk', 'womanLong', 'womanShort']

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Pick the best fantasy HAIR style</span>
      </label>
      <select
        onChange={handler('hairStyle')}
        className="select select-primary select-bordered"
      >
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default OptionHairStyle
