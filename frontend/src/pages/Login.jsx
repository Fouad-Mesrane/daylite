import { useState, useRef } from 'react'


export default function Login(){

    const emailRef = useRef();
    const pwdRef = useRef();

    return(
        <>
        <h2>Login</h2>
        <div className='form-container'>
         <fieldset>
          <form className='form-element'>
            <label>Email:
                <input type="text" ref={emailRef} />
            </label><br/>
            <label>Password:
                  <input ref={pwdRef} />
            </label><br/>
            <button>Login</button>
          </form>
          </fieldset>
          </div>
        </>
    )
}