import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#abc', width: '100%', textAlign: 'center' }}>
      <h2>Link House</h2>
      <Link to='/signup'>Get our own Link House</Link>
      <p>Made by: <Link to='https://avibedi1768.github.io/'>Arshpreet Singh Bedi</Link></p>
    </div>
  )
}

export default Footer