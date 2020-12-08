import React, { useState } from "react"

function App() {
  // counter build to have a base
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>Minus</button>
      <button onClick={() => setCount(count + 1)}>Plus</button>
    </div>
  )
}

export default App