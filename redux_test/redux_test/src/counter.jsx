import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import * as types from "./Redux/actiontype"

const counter = () => {
    const [count,setCount] = useState(null)
    const dispatch = useDispatch()
    const runfun = ()=>{
        dispatch({type: types.INCREASE});
    }
  return (
    <div>
        <button onClick={runfun}></button>
          this is redux   {count}
 </div>
  )
}

export default counter
