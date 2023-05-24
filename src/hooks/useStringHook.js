import React, {useState} from 'react'

const useStringHook = () => {

    const [stringHookState, setStringHookState] = useState('This is string')
    const someWords = 'Hello World'

    const reverseString = () => {
        setStringHookState(stringHookState.split('').reverse().join(''))
    }

    const doubleString = () => {
        setStringHookState(stringHookState + (' ') + stringHookState)
    }
    
    return {
        stringHookState: stringHookState,
        HelloWorld: someWords,
        reverseString: reverseString,
        dblStr: doubleString, //you can rename on export
        setStringHookState: setStringHookState
    }

}

export default useStringHook