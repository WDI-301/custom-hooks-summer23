import React, {useState} from 'react'

const useInput = (id, placeholder) => {
    //state -- value
    const [value, setValue] = useState('')
    
    // onChangeHandler function
    const onChangeHandler = (event) => setValue(event.target.value)

    return {
        id: id,
        name: id,
        value: value,
        onChange: onChangeHandler,
        placeholder: 'Please enter your ' + placeholder

    }  //export onChange
}

export default useInput