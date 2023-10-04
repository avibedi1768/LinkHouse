import React from 'react'
import { useState } from 'react'

import GetLink from './GetLink'
import CopyText from './CopyText'

// import firebase
import { db } from '../../firebase'
import { get, set, ref, update } from 'firebase/database'

function SetLink() {

  let beforeLink = 'https://link-house.vercel.app/getlink#'
  let username = localStorage.getItem('username')
  let url = window.location.href.split('#')[1]

  if (username !== url) {
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
      window.location.reload()
    }
  }

  return (
    <div>
      <h2>Hey {username}!</h2>
      <input type="text" placeholder='name of site/social' onChange={(e) => setSocial(e.target.value)} />
      <input type="text" placeholder='enter the link' onChange={(e) => setLink(e.target.value)} />
      <button onClick={add}>Add</button>
      <p><b>Tip:</b> Add only https link for better experience!</p><br /><hr /><br /><br />

      {/* link for getlink */}
      <CopyText first={beforeLink} second={username} />
      <p>you can share this link to your friends:</p>

      <h4>Already added links:</h4>
      <GetLink />
    </div>
  )
}

export default SetLink