import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import * as types from "./Redux/actiontype"

const Counter = () => {
    const mukan = useSelector((store)=>store)
    console.log(mukan,"this is me")
    // const [count,setCount] = useState(null)
    const dispatch = useDispatch()
    const runfun = ()=>{
        dispatch({type: types.INCREASE});
    }
  return (
    <div>
        <button onClick={runfun}>Main Hu Button</button>
          this is redux   {count}, {mukan}
 </div>
  )
}

export default Counter
