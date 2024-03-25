import React from 'react'

const icons = [
  '/facebook.png',
  '/linkedin.png',
  '/twitter.png'
]

const Footer = () => {
  return (
    <React.Fragment>
        <div className="bg-[#252427] w-[100%] p-[64px] pb-[32px] text-[#FBFFF6] rounded-t-3xl">
            <div className="flex justify-between">
              
              <div>
                <h1 className='text-left text-xl'>+1 (7635) 547-12-97</h1>
                <p><a className='font-light text-white' href='https://www.sust.edu/offices/other-offices/29'>support@sust.edu</a></p>
              </div>

              <div>
                <h1 className='text-left text-xl'>Quick Links</h1>
                <div className='grid grid-cols-2 gap-4 py-3'>
                  <p className='col-start-1 font-light'>Link 1</p>
                  <p className='col-start-3 font-light'>Link 2</p>
                  <p className='col-start-1 font-light'>Link 3</p>
                  <p className='col-start-3 font-light'>Link 4</p>
                </div>
              </div>

              <div>
                <h1 className='text-left text-xl'>Contact Us</h1>
                <input type='text' placeholder='Get Newsletter' className='mt-4 p-2 w-[192px] text-black rounded-l-md outline-none'/>
                <button className='bg-[#D70000] p-2 rounded-r-md'>Subscribe</button>
              </div>
            </div>

            <hr className='m-10 bg-[#FBFFF6]'/>

            <div className='flex justify-between'>
              <div className='flex gap-4'>
                <p><a href='https://www.facebook.com' target='blank'><img src={icons[0]} alt='facebook' className='w-6 h-6'/></a></p>
                <p><a href='https://www.linkedin.com' target='blank'><img src={icons[1]} alt='linkedin' className='w-6 h-6'/></a></p>
                <p><a href='https://www.twitter.com'  target='blank'><img src={icons[2]} alt='twitterx' className='w-6 h-6'/></a></p>
              </div>
              <p>© 2024, Sexual Harassment Prevention and Protection Cell, SUST. All rights reserved.</p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Footer
