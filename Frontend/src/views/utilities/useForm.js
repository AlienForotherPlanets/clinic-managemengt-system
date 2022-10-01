import other from 'menu-items/other';
import React,{useState} from 'react'

export const useForm = (initialFormValues,validateOnChange=false,validate) => {
    const [values,setValues] = useState(initialFormValues);
    const [errors,setErrors] = useState({});

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





export const Form = (props) => {

  const {children,...other}  = props;
  return (
    <form autoComplete='off' {...other}>
        {props.children}
    </form>
  )
}
