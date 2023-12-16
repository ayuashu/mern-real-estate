import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <Link to='/'>
            <span className="text-slate-500">Gojo</span> 
            <span className="text-slate-700">Estate</span>
            </Link>
        </h1>
        <form className='bg-slate-100 p-3 rounded-xl flex'>
            <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64" />    
            <FaSearch className='text-slate-700' />
        </form> 
        <ul className='flex gap-4'>
            <Link to='/'>
            <li className='hidden sm:inline text-slate-800 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-800 hover:underline'>About</li>
            </Link>
            <Link to='/sign-in'>
            <li className='text-slate-800 hover:underline'>Sign In</li>
            </Link>
        </ul>
        </div>
    </header>
  )
}

export default Header
