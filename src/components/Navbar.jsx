import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-[12vh] bg-purple-700 flex justify-between'>
      <span className='font-bold text-3xl text-white mx-12 mt-4'>iTodo</span>
      <div className="list">
        <ul className='flex justify-between text-white text-2xl mx-12 mt-5 gap-5 cursor-pointer'>
          <li className='hover:font-bold hover:text-purple-200'>Home</li>
          <li className='hover:font-bold hover:text-purple-200'>Your todos</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar