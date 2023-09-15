import React,{useState} from 'react'
import "./Counter.css"
const Counter = () => {
  const [count,setCount]=useState('0')
  return (
    <div className='container'>
      <h1 id='heading'>Counter App</h1>
      <div className='value-show'>
        <span>{count}</span>
      </div>
      <div className='button-sec'>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
            <button onClick={()=>{setCount(count-count)}}>Reset</button>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
      </div>

    </div>
  )
}

export default Counter
