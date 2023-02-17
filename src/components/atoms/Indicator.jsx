import React, { useEffect, useState } from "react"

const Indicator = ({ children, punctuation, points }) => {
  const [value, setValue] = useState("")

  useEffect(() => {
    if (punctuation === "0") {
      setValue("0")
    }
    if (punctuation === "1 / 2") {
      setValue("50")
    }
    if (punctuation >= "1") {
      setValue("100")
    }
  }, [punctuation])

  return (
    <div className="indicator">
      <span className="flex font-semibold z-[40] items-center justify-center border-white w-[30px] h-[30px] border-2 absolute right-0 bottom-15 left-16 rounded-full text-center text-[10px] bg-black text-white">
        {points}
      </span>

      <div
        className="w-20 h-20 radial-progress bg-neutral text-primary "
        style={{
          "--value": `${value}`,
          "--size": "8rem",
          "--thickness": "0",
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Indicator
