import { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";


export default function Login() {

  const emailRef = useRef();
  const pwdRef = useRef();
  let navigate = useNavigate()



  async function submitHandle(e) {
    e.preventDefault();
    try {
      const response = await fetch(url,
        {
          method: 'POST',
          body: {
            email: emailRef,
            password: pwdRef
          },
          headers: {
            'Content-Type': 'application/json'
          }
        });

      const result = response.json();
      console.log("logged in successfully", result);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <h2>Login</h2>
      <div className='form-container'>
        <fieldset>
          <form className='form-element' onSubmit={submitHandle}>
            <label>Email:
              <input type="text" ref={emailRef} />
            </label><br />
            <label>Password:
              <input ref={pwdRef} />
            </label><br />
            <button>Login</button>
          </form>
        </fieldset>
        <h4>Not a member? Please register <a>HERE</a></h4>
      </div>
    </>
  )
}