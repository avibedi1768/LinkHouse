import React from 'react'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './../css/signup.css'

//import firebase
import { db } from '../../firebase'
import { get, set, ref } from 'firebase/database'

function Signup() {
  document.title = 'Signup'

  let [user, setUser] = useState('')
  let [pass, setPass] = useState('')
  let [passChecker, setPassChecker] = useState('')
  let passref = useRef()
  let [showPassword, setShowPassword] = useState(false)

  function check() {
    console.log(user + ' ' + pass)

    //check for empty values
    if (user === '' || pass === '') {
      alert('please enter valid info')
      return;
    }

    //check for password length
    if (pass.length < 8) {
      alert('password must be at least 8 letters long')
      passref.current.focus()
      return;
    }

    //check for duplicate username
    get(ref(db, '/username/' + user))
      .then((snapshot) => {
        //username already exists
        if (snapshot.exists()) {
          console.log('username already exists')
          alert('Username already exists. Please try another username')
          return;
        }
        //unique username
        else {
          send()
        }
      })
  }

  function send() {
    //set
    set(ref(db, 'username/' + user + '/credentials/'), {
      password: pass,
      username: user,
      number: 0
    })

    alert('signup successful')

    async function delay() {
      await new Promise((resolve) => setTimeout(resolve, 500))
      window.location.href = '/login'
    }
    delay()
  }

  function checkPassLength() {
    // console.log('hey')
    if (pass.length <= 1) {
      setPassChecker('')
    }
    else if (pass.length >= 1 && pass.length < 7) {
      setPassChecker('"MUST BE 8 LETTERS LONG!!"')
    } else {
      setPassChecker('')
    }
  }

  //toggle password visibility
  function passShow() {
    setShowPassword(!showPassword)
  }

  return (
    <div className='signup-body'>
      <div className="signup-container">
        <div className="signup-box">
          <h2>Signup</h2>

          {/* <p><b>Hint:</b> Use your instagram username.(Don't use space)</p> */}

          <form action="#" className="signup-form">

            <div className="signup-input-box">
              <input type="text" id='signup-input-username' onChange={(e) => setUser(e.target.value)} />
              <label htmlFor="signup-input-username">Username</label>
            </div>

            <div className="signup-input-box">
              <input ref={passref} type={showPassword ? 'text' : 'password'} id='signup-input-password' onChange={(e) => { setPass(e.target.value); checkPassLength() }} />
              <label htmlFor="signup-input-password">Password {passChecker}</label>
            </div>

            <div className='signup-input-showPassword'>
              <input type="checkbox" onChange={passShow} style={{ width: '12px' }} />Show Password
              {/* <p>{passChecker}</p> */}
            </div>

            <button type='submit' onClick={check} className="signup-btn">Signup</button>

            <div className="login-link">
              <p><Link to='/login' className='login-link-link' >Already a user? Login</Link></p>
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

      <br /><br /><br />
      <p style={{ color: "#9a1750" }}>HEY <span style={{ color: "#ee4c7c", fontWeight: "600", fontSize: "1.2em" }}>{user}</span>!</p>

      <h3 style={{ color: "#9a1750" }}>
        <span style={{ color: '#ee4c7c', textDecoration: 'none' }}>LinkHouse</span> - Made by <Link to='https://avibedi1768.github.io' style={{ color: '#ee4c7c', textDecoration: 'none' }}>Arsh</Link>
      </h3>
    </div>
  )
}

export default Signup