import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userid } = useParams()

  return (
    <div className='bg-gray-700 p-4 text-center text-3xl text-white'>User Id: {userid}</div> // ✅ Now rendering the string, not the object
  )
}

export default User
