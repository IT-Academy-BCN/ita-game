import { useHandler } from "../hooks"

function OptionGlassesStyle() {
  const { handler } = useHandler()

  const options = ['none', 'round', 'square']

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Pick the best glass style</span>
      </label>
      <select onChange={handler('glassesStyle')} className="select select-primary select-bordered" placeholder="Pick one">
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default OptionGlassesStyle
