import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { WikiContext } from "../store/wikiContext/WikiContext"

function Stack() {
  // PENDINGS
  // erase stackReact, route to react and angular
  // propose :id route to go to stackData info
  // REvised: NavLink to="???"
  // check how to get data if NavLink is not pressed
  //on AddResource fetch to post json serve
  //   ckeck: how to access to react and angular objects on JSON serve
  const [display, setDisplay] = useState([])
  const { stackData, getStackData, addResource } = useContext(WikiContext)
  const location = useLocation()

  let newdata = location.pathname
  let newnewnew = newdata.replace("/", "")
  console.log(stackData)

  useEffect(() => {
    if (stackData.length === 0) {
      getStackData(newnewnew)
    }
  }, [])

  let fakeData = {
    id: "react-200",
    stack: "react",
    title: "testin",
    description: "testing",
    url: "https://www.youtube.com/watch?v=gigKP6PPmW0",
    type: { video: true, tutorial: true, blog: false },
  }

  return (
    <div>
      {stackData.map((e) => (
        <p>{e.title}</p>
      ))}
      <button onClick={() => addResource(fakeData)}> add resource</button>
    </div>
  )
}

export default Stack
