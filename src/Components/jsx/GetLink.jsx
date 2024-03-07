import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import Footer from './Footer'
import './../css/getLink.css'

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
    <div className='get-body'>
      <div className="get-container">
        <h1>Welcome to {user.toUpperCase()}'s Link-House!</h1>

        {link.length > 0 ? (
          <div className="get-box">
            {link.map((item, index) => (
              <div className="get-items">
                <p key={index}>
                  <Link className='get-item-link' to={item} target='_blank'>
                    <div className="get-item">
                      {social[index]}
                    </div>
                  </Link>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}

        <p>
          <Link to={"/signup"} className='signup-link'>
            Get your own Link-House!
          </Link>
        </p>

        <h3 style={{ color: "#fff" }}>
          <span style={{ color: '#0ef', textDecoration: 'none' }}>LinkHouse</span> - Made by <Link to='https://avibedi1768.github.io'
            style={{ color: '#0ef', textDecoration: 'none' }}
            onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
            onMouseOut={(e) => e.target.style.textDecoration = 'none'}
          >Arsh</Link>
        </h3>
      </div>


      {/* <button onClick={() => { window.location.href = '/signup' }}>Click me</button> */}

      {/* <Footer /> */}
    </div>
  )
}

export default GetLink