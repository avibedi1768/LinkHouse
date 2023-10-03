import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

//import firebase
import { db } from '../../firebase'
import { set, ref } from 'firebase/database'

function Signup() {
  document.title = 'Signup'

  let [user, setUser] = useState('')
  let [pass, setPass] = useState('')

  function send() {
    console.log(user + ' ' + pass)

    if (user == '' || pass == '') {
      alert('please enter valid info')
      return;
    }

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

  return (
    <div>
      <h2>Signup</h2>
      <input type="text" placeholder='Enter Username' onChange={(e) => setUser(e.target.value)} />
      <input type="password" placeholder='Enter Password' onChange={(e) => setPass(e.target.value)} />
      <button onClick={send}>signup</button>

      <p><Link to='/login'>Already a user?</Link></p>
    </div>
  )
}

export default Signup