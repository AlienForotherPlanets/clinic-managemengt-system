import other from 'menu-items/other';
import React,{useState} from 'react'

export const W = (initialFormValues) => {
    const [values,setValues] = useState(initialFormValues);
    
    const handleInputChange = e => {
        const {name,value}= e.target
        setValues({
            ...values,
            [name]: value
        })
        if(validateOnChange )
        validate({[name] : value})

    }
    const resetForm = () => {
        setValues(initialFormValues);
        setErrors({})
    }
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
}
