import React, { useState } from "react"

function Counter() {
  // TODO: modify to take props from App so we can use as generic component
  const [count, setCount] = useState(0)
  return (
    <div class="h-100">
      <div class="w-25 mx-auto shadow-lg p-3 mb-5 bg-white rounded">
        <h1 class="text-center">Counter</h1>
        <h2 class="text-center">{count}</h2>
        <div class="btn-group btn-group-lg col-sm">
          <button onClick={() => setCount(count - 1)} class="btn btn-outline-primary">-</button>
          <button onClick={() => setCount(count + 1)} class="btn btn-outline-primary">+</button>
        </div>
      </div>
    </div>
  )
}

export default Counter