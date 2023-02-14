import { useHandler } from '../hooks'

export default function OptionShirtStyle() {
  const { handler } = useHandler()

  const options = ['hoody', 'short', 'polo']

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Pick your SHIRT Style</span>
      </label>
      <select
        onChange={handler('shirtStyle')}
        className="select select-primary select-bordered"
      >
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
