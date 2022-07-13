import React from 'react'
import * as types from "./actiontype"

const reducer=(state,action) =>{

    switch(action.type){
        case types.INCREASE:
            console.log(state.count+1)
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
