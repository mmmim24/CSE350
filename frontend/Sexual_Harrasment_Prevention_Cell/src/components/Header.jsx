import React from 'react'
import NavBar from './NavBar';

const Header = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col gap-4 my-8 w-full sm:flex-row sm:w-[90%] items-center">
        <a className="mx-auto my-auto sm:mx-8" href="/">
          <img src="/sust.png" alt="sust" className="w-8 sm:w-16 mx-auto" />
        </a>
        <h1 className="text-base font-medium text-center mx-4 sm:text-left md:text-lg sm:text-sm sm:w-[50vw] lg:text-2xl">
          Sexual Harassment Prevention <br /> and Protection Cell
        </h1>
        <NavBar />
      </div>

    </React.Fragment>
  )
}

export default Header
