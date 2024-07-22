import { useEffect, useState } from "react"

const Counter=()=>{
    const [count,setCount] = useState(0)
    const [textLive,setTextLive] = useState("")
    const increment=()=> setCount(count+1)
    const decrement=()=> count>0 && setCount(count-1)

    // Mount
    useEffect(()=>{
        console.log('Mount')
    },[])
    // Update
    // 
    // useEffect(()=>{
    //     console.log(count)
    // })

    // useEffect(()=>{
    //     console.log(count)
    // },[count])

    // useEffect(()=>{
    //     return ()=> console.log("Unmount")
    // })


    return(
        <div>
            <h2>Counter Component</h2>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <br/>
            <br/>
            <input type="text" onChange={(e)=>setTextLive(e.target.value)}/>
            <h2>{textLive}</h2>
        </div>
    )
}

export default Counter