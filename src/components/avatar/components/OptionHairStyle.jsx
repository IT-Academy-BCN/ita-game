function OptionHairStyle() {
  const options = ['normal', 'thick', 'mohawk', 'womanLong', 'womanShort']
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Pick the best fantasy HAIR style</span>
      </label>
      <select className="select select-bordered">
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>

    </div>
  )
}

export default OptionHairStyle
