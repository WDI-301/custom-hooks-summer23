import React, {useState} from 'react'

const useStringHook = () => {

    const [stringHookState, setstringHookState] = useState('This is string')

    return {
        stringHookState: stringHookState
    }

}

export default useStringHook