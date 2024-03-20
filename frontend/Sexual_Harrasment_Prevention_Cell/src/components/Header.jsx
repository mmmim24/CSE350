import React from 'react'
import NavBar from './NavBar';

const Header = () => {
  return (
    <React.Fragment>
        <div className="flex gap-[32px] my-[32px] w-[80%]">
            <a href='/'><img src='/sust.png' alt='sust' className='m-[auto] w-[64px]'/></a>
            <h1 className='w-[50vw] lg:text-2xl font-medium sm:text-sm md:text-lg text-left my-[auto] mx-[16px]'>Sexual Harassment Prevention <br/> and Protection Cell</h1>
            <NavBar />
        </div>
    </React.Fragment>
  )
}

export default Header
