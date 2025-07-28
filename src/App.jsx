import { useState } from 'react'
import 'remixicon/fonts/remixicon.css';
import './App.css'

function App() {

  return (
    <>
    <div className="container">
      <div className="logo"><i class="ri-twitter-x-line"></i></div> 
      <h5>Sign In to Twitter</h5>
      <div className="btns">
        <button>
          <img src="src\assets\images\google-logo.svg" alt="" />
          <p>Sign in with Google</p>
        </button>
        <button>
          <img src="src\assets\images\apple-logo.svg" alt="" />
          <p>Sign in with Apple</p>
        </button>
      </div>
      <div className="divider">
        <hr />
        <span>Or</span>
        <hr />
      </div>
      <input type='text' className='username' placeholder='Email or username'></input>
      <button className='submit-btn'>Submit</button>
      <p className='forget-pass'><a href=''>Forget Password</a></p>
    </div>
    </>
  )
}

export default App;
