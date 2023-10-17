import React from 'react'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import Footer from './Footer'

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
    if (pass.length < 7) {
      setPassChecker('Password should be at least 8 letters long')
    } else {
      setPassChecker('')
    }
  }

  //toggle password visibility
  function passShow() {
    setShowPassword(!showPassword)
  }

  return (
    <div>
      <h2>Signup</h2>
      <p><b>Hint:</b> Use your instagram username.(Don't use space)</p>
      <input type="text" placeholder='Enter Username' onChange={(e) => setUser(e.target.value)} /><br /><br />
      <input ref={passref} type={showPassword ? 'text' : 'password'} placeholder='Enter Password' onChange={(e) => { setPass(e.target.value); checkPassLength() }} />
      <input type="checkbox" onChange={passShow} />Show Password
      <p>{passChecker}</p>
      <button onClick={check}>Signup</button>

      <p><Link to='/login'>Already a user?</Link></p>

      <Footer />
    </div>
  )
}

export default Signup