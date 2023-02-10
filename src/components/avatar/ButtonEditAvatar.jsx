import { useState } from 'react'

function ButtonEditAvatar({ className }) {
  const [edition, setEdition] = useState(false)
  const handleClick = () => {
    setEdition(!edition)
  }
  return (
    <button
      onClick={handleClick}
      className={`scale-75 btn btn-circle bg-primary ${className}`}
    >
      <svg
        className="w-5"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.06 6.67091L11.98 7.61674L2.92 16.9311H2V15.9853L11.06 6.67091V6.67091ZM14.66 0.481873C14.41 0.481873 14.15 0.58468 13.96 0.780016L12.13 2.6614L15.88 6.5167L17.71 4.63531C18.1 4.23436 18.1 3.58667 17.71 3.18572L15.37 0.780016C15.17 0.5744 14.92 0.481873 14.66 0.481873V0.481873ZM11.06 3.76145L0 15.132V18.9873H3.75L14.81 7.61674L11.06 3.76145V3.76145Z"
          fill="#323232"
        />
      </svg>
      {edition && 'e'}
    </button>
  )
}

export default ButtonEditAvatar
