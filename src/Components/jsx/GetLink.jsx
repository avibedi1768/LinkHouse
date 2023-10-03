import React from 'react'
import { useState, useEffect } from 'react'

//import firebase
import { db } from '../../firebase'
import { get, ref } from 'firebase/database'

function GetLink() {
  let [social, setSocial] = useState([])
  let [link, setLink] = useState([])
  let user = window.location.href.split('#')[1]

  useEffect(() => {
    get(ref(db, 'username/' + user + '/credentials/number'))
      .then((snapshot) => {
        let n = snapshot.val()
        console.log(n)

        loop(n)
      })
  }, [])

  function loop(n) {
    //for social name
    let promises1 = []
    for (let i = 0; i < n; i++) {
      let promise = get(ref(db, 'username/' + user + '/messages/' + i + '/social'))
        .then((snapshot) => {
          return snapshot.val()
        })
      promises1.push(promise)
    }

    Promise.all(promises1).then((messages) => {
      console.log(messages)
      setSocial(messages)
    })


    //for links
    let promises2 = []
    for (let i = 0; i < n; i++) {
      let promise = get(ref(db, 'username/' + user + '/messages/' + i + '/link'))
        .then((snapshot) => {
          return snapshot.val()
        })
      promises2.push(promise)
    }

    Promise.all(promises2).then((messages) => {
      console.log(messages)
      setLink(messages)
    })
  }

  return (
    <div>
      <h2>Hey {user}</h2>

      {link.length > 0 ? (
        <ul>
          {link.map((item, index) => (
            <li key={index}>
              <a href={process.env.PUBLIC_URL + item}>{social[index]}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  )
}

export default GetLink