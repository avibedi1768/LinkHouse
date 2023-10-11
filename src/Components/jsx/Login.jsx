import React from 'react'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

//import firebase
import { db } from '../../firebase'
import { ref, get } from 'firebase/database'

function Login() {
  document.title = 'Login'

  let [user, setUser] = useState('')
  let [pass, setPass] = useState('')
  let passref=useRef()

  function match() {
    console.log(user + ' ' + pass)

    get(ref(db, 'username/' + user + '/credentials/password'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          //username exists
          const p = snapshot.val()
          console.log(p)

          //if password matches
          if (pass == p) {
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

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder='Enter Username' onChange={(e) => setUser(e.target.value)} />
      <input ref={passref} type="password" placeholder='Enter Password' onChange={(e) => setPass(e.target.value)} />
      <button onClick={match}>Login</button>
      <p><Link to='/signup'>New user?</Link></p>
    </div>
  )
}

export default Login