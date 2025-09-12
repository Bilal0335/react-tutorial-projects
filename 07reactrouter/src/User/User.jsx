import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userid} = useParams()
  return (
    <div className='text-center text-5xl text-white p-7 bg-gray-500'>User: {userid}</div>
  )
}

export default User