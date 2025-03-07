import React from 'react'
import { useRef } from 'react'
import { useNavigate } from "react-router-dom";
const Register = () => {
    const emailRef = useRef();
    const pwdRef = useRef();
    const nameRef = useRef();
    let navigate = useNavigate()
    async function submitHandle(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/users/',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        name: nameRef,
                        email: emailRef,
                        password: pwdRef
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            const result = response.json();
            console.log("Registration successful", result);
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <h2>REGISTRATION</h2>
            <div className='form-container'>
                <fieldset>
                    <form className='form-element' onSubmit={submitHandle}>
                        <label>Name:
                            <input type="text" ref={nameRef} />
                        </label><br />
                        <label>Enter email:
                            <input type="text" ref={emailRef} />
                        </label><br />
                        <label>Enter Password:
                            <input ref={pwdRef} />
                        </label><br />
                        <button>Register</button>
                    </form>
                </fieldset>
            </div>
        </>
    )
}

export default Register