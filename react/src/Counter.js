import React, { useState } from "react"

function Counter(props) {
  const [count, setCount] = useState(0)
  return (
    <div className="col">
      <div className="m-3 p-3 border bg-light">
        <h1 className="text-center">{props.name}</h1>
        <h2 className="text-center">{count}</h2>
        <div className="btn-group btn-group-lg col-sm">
          <button onClick={() => setCount(count - 1)} className="btn btn-outline-primary">-</button>
          <button onClick={() => setCount(count + 1)} className="btn btn-outline-primary">+</button>
        </div>
      </div>
    </div>
  )
}

export default Counter