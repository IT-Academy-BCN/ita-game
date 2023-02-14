import { useState } from 'react'
import { Avatar } from '../avatar'
import ButtonEdit from './ButtonEdit'
import Card from './Card'
import DividerSection from './DividerSection'
import ProgressBar from './ProgressBar'
import SubLabelProgressBar from './SubLabelProgressBar'

function CardProfile({ data }) {
  const { name, surname, framework } = data

  const [edit, setEdit] = useState(false)
  const handleClick = e =>  setEdit(!edit)
  

  return (
    <Card>
      {/*  card profile header */}
      <div className="relative flex flex-row justify-center mb-20 w-100">
        {/* avatar box */}
        <div className="absolute flex flex-col items-center justify-center ">
          {/* avatar*/}
           <Avatar />
          {/* name */}
          <div className="font-bold text-black">
            {name} {surname}
          </div>
          {/* dev position */}
          <div className="font-bold text-neutral-focus">{framework}</div>
        </div>
        {/* edition */}
        <div className="absolute right-0 w-1/6">
          <ButtonEdit handleClick={handleClick} />
        </div>
      </div>
      {/* card body */}
      <div className="flex flex-col mt-28">
        {/* progressbar  container*/}
        <div className="flex flex-col w-full">
          {/* bar */}
          <ProgressBar data={data} />
          <SubLabelProgressBar subLabeData={data} />
        </div>
        {/* divider section */}
        <DividerSection data={data} />
      </div>
    </Card>
  )
}

export default CardProfile
