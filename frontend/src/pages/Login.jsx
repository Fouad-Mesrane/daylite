import { useState, useRef } from 'react'


export default function Login(){

    const emailRef = useRef();
    const pwdRef = useRef();

    return(
        <>
          <form>
            <label>Email:
                <input type="text" ref={emailRef} />
            </label><br/>
            <label>Password:
                  <input ref={pwdRef} />
            </label><br/>
            <button>Login</button>
          </form>
        </>
    )
}