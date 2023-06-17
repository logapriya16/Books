import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate=useNavigate()
  return (
    <div>
      <button onClick={()=>navigate('/search') }>Search</button>
    </div>
  )
}
