import { useState } from 'react'
import Avatar from './Avatar'

function PageEdition() {
  const [edit, setEdit] = useState(false)
  const handleClick = () => setEdit(!edit)
  return (
    <div className="flex justify-center p-5 bg-slate-500">
      <button className="btn btn-primary" onClick={handleClick}>Display Edition</button>
      <Avatar edit={edit} />
    </div>
  )
}

export default PageEdition
