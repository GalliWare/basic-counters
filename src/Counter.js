import React, { useState } from "react"
// TODO: Style with Bootstrap

function Counter(props) {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div className="w-25 mx-auto shadow-lg p-3 mb-5 bg-white rounded">
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