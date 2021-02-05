import React, { useState } from "react"
import Counter from "./Counter"
// TODO: Style with Bootstrap

function App() {
  const [addButton, setAddButton] = useState(true)
  const [textInput, setTextInput] = useState("")
  const [counters, setCounters] = useState([<Counter name="Runs" key="Runs" />])

  function addCounter(event) {
    if ((event._reactName === "onKeyDown" && event.code === "Enter") || event._reactName === "onClick") {
      console.log(event)
      const countName = event.target.value
      let countersTemp = counters
      countersTemp.push(<Counter name={countName} key={countName} />)
      setCounters(countersTemp)
      setTextInput("")
      if (counters.length === 6) { setAddButton(false) }
    }
  }

  return (
    addButton ?
      <div>
        <div>
          {counters}
        </div>
        <div>
          <div className="w-25 mx-auto p-3 mb-5 bg-white rounded">
            <input typeof="text" value={textInput} placeholder="Counter Name Here..." onKeyDown={addCounter} onChange={(event) => { setTextInput(event.target.value) }}></input>
            <button className="btn btn-outline-primary col-sm" value={textInput} onClick={addCounter}> Add Counter +</button>
          </div>
        </div>
      </div > :
      <div>
        {counters}
      </div>
  )
}

export default App