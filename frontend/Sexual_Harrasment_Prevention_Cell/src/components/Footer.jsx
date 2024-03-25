import React from 'react'

const Footer = () => {
  return (
    <React.Fragment>
        <div className="bg-[#252427] w-[100%] p-[64px] pb-[32px] text-[#FBFFF6] rounded-t-3xl">
            <div className="flex justify-between">
              
              <div className='text-left'>
                <h1 className='text-left text-xl'>+1 (7635) 547-12-97</h1>
                <p className='font-light'>support@sust.edu</p>
              </div>

              <div>
                <h1 className='text-left text-xl'>Quick Links</h1>
                <div className='grid grid-cols-4 gap-4 py-3'>
                  <p className='col-start-1 font-light'>Link 1</p>
                  <p className='col-start-3 font-light'>Link 2</p>
                  <p className='col-start-1 font-light'>Link 3</p>
                  <p className='col-start-3 font-light'>Link 4</p>
                </div>
              </div>

              <div>
                <h1 className='text-left text-xl py-4'>Contact Us</h1>
                <input type='text' placeholder='Get Newsletter' className='p-2 w-[192px] text-black rounded-l-md outline-none'/>
                <button className='bg-[#D70000] p-2 rounded-r-md'>Subscribe</button>
              </div>
            </div>

            <hr className='m-10 bg-[#FBFFF6]'/>

            <div className='flex justify-between'>
              <div className='flex gap-10'>
                <p>LinkedIN</p>
                <p>Facebook</p>
                <p>Twitter</p>
              </div>
              <p>© 2024, Sexual Harassment Prevention and Protection Cell, SUST. All rights reserved.</p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Footer
