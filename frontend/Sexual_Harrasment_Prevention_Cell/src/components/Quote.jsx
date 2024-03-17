import React from 'react'

const Quote = () => {
    const images = [
        '/SI.jpg',
        '/AAM.jpg',
        '/MR.jpg'
    ]
  return (
    <React.Fragment>
        <div className='px-[256px] w-auto my-[64px] '>
            <div className="grid grid-cols-3 items-center justify-center">
                <div className='p-7'>
                    <p className='text-xl font-semibold'>Dr. Sabina Islam</p>
                    <p className='text-lg'>Chairperson</p>
                    <img src={images[0]} alt='Sabina Islam' className='w-[200px] h-[200px] mx-[auto] my-[32px] rounded-full self-center'/>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quaerat voluptate odio debitis obcaecati tempora, cupiditate laudantium nulla sit eveniet?</p>
                </div>
                <div className='p-7'>
                    <p className='text-xl font-semibold'>Mohammad Abdullah Al Mumin, PhD</p>
                    <p className='text-lg'>Member</p>
                    <img src={images[1]} alt='Abdullah Al Mumin' className='w-[200px] h-[200px] mx-[auto] my-[32px] rounded-full'/>
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quia, ex laudantium perspiciatis atque expedita quidem a voluptatum? Maiores, eos atque.</p>
                </div>
                <div className='p-7'>
                    <p className='text-xl font-semibold'>Dr. Muntaha Rakib</p>
                    <p className='text-lg'>Member Secretary</p>
                    <img src={images[2]} alt='Muntaha Rakib' className='w-[200px] h-[200px] mx-[auto] my-[32px] rounded-full'/>
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, suscipit unde impedit tenetur nisi fugit reiciendis ea, totam perspiciatis aspernatur beatae .</p>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Quote