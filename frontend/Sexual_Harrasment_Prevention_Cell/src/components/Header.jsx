import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
        <div className="flex gap-20 align-center">
            <h1 className='mt-6'>Sexual Harrasment Prevention Cell</h1>
            <Link className='text-3xl bg-yellow-500 hover:bg-orange-500 text-black hover:text-black font-bold py-3 px-5 my-6 rounded-xl' to='/login'>Login </Link>
        </div>
    </React.Fragment>
  )
}

export default Header
