import React, { useState } from 'react'

const Test = () => {
    const[count,setCount] = useState(0)

    function increaseNumber () {
        setCount(count+1)
    }
    function decreaseNumber () {
        setCount(count-1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increaseNumber}>+</button>
        <button onClick={decreaseNumber}>-</button>

    </div>
  )
}

export default Test