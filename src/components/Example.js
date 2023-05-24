import React from 'react'
import useStringHook from '../hooks/useStringHook'

const Example = () => {
    const {stringHookState, reverseString} = useStringHook()
  return (
    <div>
        <h2>------Example-----</h2>
        <p>{stringHookState}</p>  
        <button onClick={reverseString}>Reverse IT!</button>
    </div>
  )
}

export default Example