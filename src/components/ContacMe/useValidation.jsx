
import { useState } from "react";


export default function useValidation () {
    
    const [userLogin, setUserLogin] = useState({
        email: "",
        name: "",
        textarea: "",
    })

    const [focusedEmailInput, setFocusedEmailInput] = useState(false);
    const [focusedNameInput, setFocusedPasswordInput] = useState(false);
    const [focusedTextareaInput, setFocusedTextareaInput] = useState(false);

    const handleChange = (e) => {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        });
    };

    const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userLogin.email);

    const isName = userLogin.name.length > 3 ; 

    const isTextarea = userLogin.textarea.length > 0; 


    //validaciones de input
    const inputInvalidFields = !isName || !isEmail
    const inputInvalidTextarea = !isTextarea; 


    //boton disable
    const someFieldEmpty = !isEmail || !isName ||  !isTextarea; 

    const allowEmailErrorMessage = () => {
        setFocusedEmailInput(true);
    }

    const allowNameErrorMessage = () => {
        setFocusedPasswordInput(true);
    }

    const allowTextareaErrorMessage = () => {
        setFocusedTextareaInput(true); 
    }

    return {
        userLogin,
        handleChange,
        inputInvalidFields,
        someFieldEmpty,
        inputInvalidTextarea,
        focusedNameInput,
        focusedTextareaInput,
        focusedEmailInput,
        allowEmailErrorMessage,
        allowNameErrorMessage,
        allowTextareaErrorMessage
    }
}