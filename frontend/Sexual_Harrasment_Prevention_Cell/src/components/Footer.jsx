import React from 'react'

const icons = [
  '/facebook.png',
  '/linkedin.png',
  '/twitter.png'
]

const Footer = () => {
  return (
    <React.Fragment>
      <div className="text-sm bg-[#252427] w-full p-8 text-[#FBFFF6] rounded-t-3xl sm:p-12 sm:pb-8">
        <div className="flex flex-col justify-between sm:flex-row">
          <div className="flex items-center justify-between mb-4 sm:mb-0">
            <h1 className="text-left text-sm sm:text-xl">+1 (7635) 547-12-97</h1>
            <p>
              <a className="font-light text-sm text-white" href="https://www.sust.edu/offices/other-offices/29">support@sust.edu</a>
            </p>
          </div>
          <div className="mb-4 sm:mb-0">
            <h1 className="text-left text-sm sm:text-xl">Quick Links</h1>
            <div className="grid grid-cols-2 gap-2 py-2 sm:gap-4 sm:py-3">
              <p className="col-start-1 font-light">Link 1</p>
              <p className="col-start-2 font-light">Link 2</p>
              <p className="col-start-1 font-light">Link 3</p>
              <p className="col-start-2 font-light">Link 4</p>
            </div>
          </div>
          <div>
            <h1 className="text-left text-lg sm:text-xl">Contact Us</h1>
            <div className="flex mt-4">
              <input type="text" placeholder="Get Newsletter" className="p-2 w-full text-black rounded-l-md outline-none sm:w-[192px]" />
              <button className="bg-[#D70000] p-2 rounded-r-md">Subscribe</button>
            </div>
          </div>
        </div>

        <hr className="my-4 bg-[#FBFFF6] sm:my-10" />

        <div className="flex flex-col justify-between items-center sm:flex-row">
          <div className="flex gap-8 mb-4 sm:mb-0">
            <p><a href="https://www.facebook.com" target="blank"><img src={icons[0]} alt="facebook" className="w-6 h-6" /></a></p>
            <p><a href="https://www.linkedin.com" target="blank"><img src={icons[1]} alt="linkedin" className="w-6 h-6" /></a></p>
            <p><a href="https://www.twitter.com" target="blank"><img src={icons[2]} alt="twitterx" className="w-6 h-6" /></a></p>
          </div>
          <p className="text-xs text-center sm:text-left">© 2024, Sexual Harassment Prevention and Protection Cell, SUST. All rights reserved.</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer
