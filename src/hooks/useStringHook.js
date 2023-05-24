import React, {useState} from 'react'

const useStringHook = () => {

    const [stringHookState, setStringHookState] = useState('This is string')
    const someWords = 'Hello World'

    const reverseString = () => {
        setStringHookState(stringHookState.split('').reverse().join(''))
    }

    // double string -> hello -> hello hello

    return {
        stringHookState: stringHookState,
        HelloWorld: someWords,
        reverseString: reverseString
    }

}

export default useStringHook