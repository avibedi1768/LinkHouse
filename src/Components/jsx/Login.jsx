import React from 'react'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './../css/login.css'

//import firebase
import { db } from '../../firebase'
import { ref, get } from 'firebase/database'

function Login() {
  document.title = 'Login'

  let [user, setUser] = useState('')
  let [pass, setPass] = useState('')
  let passref = useRef()
  let [passwordShow, setPasswordShow] = useState(false)

  function match() {
    console.log(user + ' ' + pass)

    get(ref(db, 'username/' + user + '/credentials/password'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          //username exists
          const p = snapshot.val()
          console.log(p)

          //if password matches
          if (pass === p) {
            alert('password matches')

            window.location.href = '/setlink#' + user

            //add user to local storage
            localStorage.setItem('username', user)

          } else {
            //password does not match
            alert('password does not match. plz try again')
            passref.current.focus()
          }
        } else {
          //username does not exist
          alert('username does not exist')
          window.location.href = '/signup'
        }
      })
  }

  //toggle password visibility 
  function passShow() {
    setPasswordShow(!passwordShow)
  }

  return (
    <div className='login-body'>
      <div className="login-container">
        <div className="login-box">

          <h2>Login</h2>

          <form action="#" className="login-form">

            <div className="login-input-box">
              <input type="text" id='login-input-username' onChange={(e) => setUser(e.target.value)} />
              <label htmlFor="login-input-username">Username</label>
            </div>

            <div className="login-input-box">
              <input ref={passref} type={passwordShow ? 'text' : 'password'} className='login-input-password' onChange={(e) => setPass(e.target.value)} />
              <label htmlFor="login-input-password">Password</label>
            </div>

            <div className='login-input-showPassword'>
              <input type="checkbox" onChange={passShow} style={{ width: '12px' }} />Show password
            </div>

            <button type='submit' onClick={match} className="signup-btn">Login</button>

            <div className="login-link">
              <p><Link to='/signup' className='login-link-link'>New user? SignUp</Link></p>
            </div>
          </form>
        </div>

        <span style={{ "--i": 0 }}></span>
        <span style={{ "--i": 1 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 3 }}></span>
        <span style={{ "--i": 4 }}></span>
        <span style={{ "--i": 5 }}></span>
        <span style={{ "--i": 6 }}></span>
        <span style={{ "--i": 7 }}></span>
        <span style={{ "--i": 8 }}></span>
        <span style={{ "--i": 9 }}></span>
        <span style={{ "--i": 10 }}></span>
        <span style={{ "--i": 11 }}></span>
        <span style={{ "--i": 12 }}></span>
        <span style={{ "--i": 13 }}></span>
        <span style={{ "--i": 14 }}></span>
        <span style={{ "--i": 15 }}></span>
        <span style={{ "--i": 16 }}></span>
        <span style={{ "--i": 17 }}></span>
        <span style={{ "--i": 18 }}></span>
        <span style={{ "--i": 19 }}></span>
        <span style={{ "--i": 20 }}></span>
        <span style={{ "--i": 21 }}></span>
        <span style={{ "--i": 22 }}></span>
        <span style={{ "--i": 23 }}></span>
        <span style={{ "--i": 24 }}></span>
        <span style={{ "--i": 25 }}></span>
        <span style={{ "--i": 26 }}></span>
        <span style={{ "--i": 27 }}></span>
        <span style={{ "--i": 28 }}></span>
        <span style={{ "--i": 29 }}></span>
        <span style={{ "--i": 30 }}></span>
        <span style={{ "--i": 31 }}></span>
        <span style={{ "--i": 32 }}></span>
        <span style={{ "--i": 33 }}></span>
        <span style={{ "--i": 34 }}></span>
        <span style={{ "--i": 35 }}></span>
        <span style={{ "--i": 36 }}></span>
        <span style={{ "--i": 37 }}></span>
        <span style={{ "--i": 38 }}></span>
        <span style={{ "--i": 39 }}></span>
        <span style={{ "--i": 40 }}></span>
        <span style={{ "--i": 41 }}></span>
        <span style={{ "--i": 42 }}></span>
        <span style={{ "--i": 43 }}></span>
        <span style={{ "--i": 44 }}></span>
        <span style={{ "--i": 45 }}></span>
        <span style={{ "--i": 46 }}></span>
        <span style={{ "--i": 47 }}></span>
        <span style={{ "--i": 48 }}></span>
        <span style={{ "--i": 49 }}></span>
      </div>

      <h3 style={{ color: "#fff" }}>
        <span style={{ color: '#0ef', textDecoration: 'none' }}>LinkHouse</span> - Made by <Link to='https://avibedi1768.github.io' style={{ color: '#0ef', textDecoration: 'none' }}
          onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
          onMouseOut={(e) => e.target.style.textDecoration = 'none'}
        >Arsh</Link>
      </h3>
    </div>
  )
}

export default Login