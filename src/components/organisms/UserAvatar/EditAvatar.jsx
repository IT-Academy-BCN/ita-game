import UserAvatar from './UserAvatar'

function EditAvatar() {

  return (
    <div className="bg-lime-200">
      PageAvatar
      <UserAvatar className="w-32 h-32" userId={2} />
    </div>
  )
}

export default EditAvatar
