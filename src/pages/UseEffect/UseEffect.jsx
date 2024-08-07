import { useEffect, useState } from "react"



const UseEffect = () => {

    const[count,setCount] = useState(0)
    const[decrease, setDecrease] = useState(0)
    function increaseNumber (){
        setCount(count + 1)

    }

    const decreaseNumber = () =>{
        setDecrease(decrease-1)
    }

    // first time website access garda mattai run hune
    // useEffect(() =>{
    //     console.log("Welcome to website")
    // },[])

    //count increse huda run hune 
    useEffect(() =>{
        if (count !== 0){
            console.log("Count value changed")
        }
    },[count,decrease])

  return (
    <div>
        <div>UseEffect</div>
        <h1>{count}</h1>
        <button onClick={increaseNumber}>+</button>

        <h1>{decrease}</h1>
        <button onClick={decreaseNumber}>-</button>

    </div>
  )
}

export default UseEffect