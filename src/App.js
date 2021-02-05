import React, { useState } from "react"
import Counter from "./Counter"

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
    <div className="container w-100 h-auto mt-5 mb-5">
      <div className="row row-cols-auto">
        {counters}
      </div>
      {addButton ?
        <div className="row row-cols-auto">
          <div className="col m-3 p-3 border bg-light">
            <input className="input-group input-group-text mb-3" typeof="text" value={textInput} placeholder="Counter Name Here..." onKeyDown={addCounter} onChange={(event) => { setTextInput(event.target.value) }}></input>
            <button className="btn btn-outline-primary col-sm" value={textInput} onClick={addCounter}> Press Enter or Click here to add</button>
          </div>
        </div> : null}
    </div >
  )
}

export default App