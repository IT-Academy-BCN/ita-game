import { useState } from "react"
import { Link } from "react-router-dom"
import Avatar from "./Avatar"

function PageEdition() {
  const [edit, setEdit] = useState(false)
  const handleClick = () => setEdit(!edit)
  return (
    <div className="relative flex justify-center p-5 bg-slate-500">
      <button className="absolute left-4 btn btn-primary" onClick={handleClick}>
        Display Edition
      </button>
      <Avatar edit={edit} />
      <Link to="/home" className="absolute right-4 btn btn-primary">
        Home
      </Link>
    </div>
  )
}

export default PageEdition
