import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

// import firebase
import { db } from '../../firebase'
import { get, set, ref, update } from 'firebase/database'

function SetLink() {

  let username = localStorage.getItem('username')
  let url = window.location.href.split('#')[1]

  if (username != url) {
    window.location.href = '/login'
  }

  let [social, setSocial] = useState('')
  let [link, setLink] = useState('')

  function add() {
    console.log(social + ' ' + link)

    //get number
    get(ref(db, 'username/' + username + '/credentials/number'))
      .then((snapshot) => {
        const n = snapshot.val()
        console.log(n)
        setSocial(n)
      })

    // set social links
    function setSocial(n) {
      // add social, link
      set(ref(db, 'username/' + username + '/messages/' + n), {
        social: social,
        link: link
      })

      // update number
      update(ref(db, 'username/' + username + '/credentials/'), {
        number: n + 1
      })

      alert('Social Link added')
    }
  }

  return (
    <div>
      <h2>SetLink</h2>
      <input type="text" placeholder='name of site/social' onChange={(e) => setSocial(e.target.value)} />
      <input type="text" placeholder='enter the link' onChange={(e) => setLink(e.target.value)} />
      <button onClick={add}>Add</button>
    </div>
  )
}

export default SetLink