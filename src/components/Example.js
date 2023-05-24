import React from 'react'
import useStringHook from '../hooks/useStringHook'

const Example = () => {
    const {stringHookState, reverseString, setStringHookState} = useStringHook()
  return (
    <div>
        <h2>------Example-----</h2>
        <p>{stringHookState}</p>  
        <input onChange={
            (event) => setStringHookState(event.target.value)
        } 
        />
        <button onClick={reverseString}>Reverse IT!</button>
    </div>
  )
}

export default Example