import React from 'react'
import * as types from "./actiontype"

const reducer=(state,action) =>{

    switch(action){
        case types.INCREASE:
            return {
                count : state.count+1
            }
        case types.DECREASE:
            return {
                count : state.count-1
            }
        default :
            return state
    }

 
}

export default reducer
