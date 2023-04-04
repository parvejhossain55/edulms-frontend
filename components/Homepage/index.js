import Link from 'next/link'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <div className="home bg-slate-600 p-6">
        <div className="header flex justify-between items-center">
          <div className="logo text-white text-2xl font-semibold">EduCare</div>
          <div className='flex space-x-6 text-white'>
            <div>
              <Link href='/login'>Login</Link>
            </div>
            <div>
              <Link href='signup'>Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage