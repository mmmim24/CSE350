import React from 'react'

const Quote = () => {
    const images = [
        '/SI.jpg',
        '/AAM.jpg',
        '/MR.jpg'
    ]
  return (
    <React.Fragment>
        <div className='px-[100px] w-auto my-[64px] '>
            <div className='text-3xl font-bold text-center my-10 text-[#D70000]'>
                Committee
            </div>
            <div className="grid grid-cols-3 gap-4 items-center justify-center">
                <div className='min-h-[512px] p-7 border-[1px] border-[#136F63] rounded-3xl'>
                    <img src={images[0]} alt='Sabina Islam' className='w-[200px] h-[200px] mx-[auto] my-[32px] rounded-full self-center'/>
                    <p className='text-lg font-semibold '>Dr. Sabina Islam</p>
                    <p className='text-lg'>Chairperson</p>
                    <p className='text-justify pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quaerat voluptate odio debitis obcaecati tempora, cupiditate laudantium nulla sit eveniet?</p>
                </div>
                <div className='min-h-[512px] p-7 border-[1px] border-[#136F63] rounded-3xl'>
                    <img src={images[1]} alt='Abdullah Al Mumin' className='w-[200px] h-[200px] mx-[auto] my-[32px] rounded-full'/>
                    <p className='text-lg font-semibold '>Mohammad Abdullah Al Mumin, PhD</p>
                    <p className='text-lg'>Member</p>
                    <p className='text-justify pt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quia, ex laudantium perspiciatis atque expedita quidem a voluptatum? Maiores, eos atque.</p>
                </div>
                <div className='min-h-[512px] p-7 border-[1px] border-[#136F63] rounded-3xl'>
                    <img src={images[2]} alt='Muntaha Rakib' className='w-[200px] h-[200px] mx-[auto] my-[32px] rounded-full'/>
                    <p className='text-lg font-semibold '>Dr. Muntaha Rakib</p>
                    <p className='text-lg'>Member Secretary</p>
                    <p className='text-justify pt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, suscipit unde impedit tenetur nisi fugit reiciendis ea, totam perspiciatis aspernatur beatae .</p>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Quote