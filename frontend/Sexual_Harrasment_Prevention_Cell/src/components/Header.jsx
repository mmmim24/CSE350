import React from 'react'
import NavBar from './NavBar';

const Header = () => {
  return (
    <React.Fragment>
        <div className="flex gap-[64px]  mt-[32px] mb-[64px]">
            <img src='/sust.png' alt='sust' className='m-[auto] w-[64px]'/>
            <h1 className='text-5xl my-[auto] mx-[32px]'>Sexual Harrasment Prevention Cell</h1>
            <NavBar />
        </div>
    </React.Fragment>
  )
}

export default Header
