import React from 'react'

const Quote = () => {
    const images = [
        '/SI.jpg',
        '/AAM.jpg',
        '/MR.jpg'
    ]
    return (
        <React.Fragment>
            <div className="px-8 w-auto my-8 sm:px-10 lg:px-24">
                <div className="text-xl font-bold text-center my-6 text-[#D70000] sm:text-2xl lg:text-3xl">
                    Committee
                </div>
                <div className="grid grid-cols-1 gap-6 items-center justify-center sm:grid-cols-2 lg:grid-cols-3">
                    <div className="min-h-[240px] p-5 border border-[#136F63] rounded-3xl sm:p-6 lg:p-7">
                        <img src={images[0]} alt="Sabina Islam" className="w-24 h-24 mx-auto my-4 rounded-full sm:w-40 sm:h-40 lg:w-[200px] lg:h-[200px]" />
                        <p className="text-base font-semibold text-center sm:text-lg">Dr. Sabina Islam</p>
                        <p className="text-base text-center sm:text-lg">Chairperson</p>
                        <p className="text-justify pt-3 sm:pt-4 lg:pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quaerat voluptate odio debitis obcaecati tempora, cupiditate laudantium nulla sit eveniet?</p>
                    </div>
                    <div className="min-h-[240px] p-5 border border-[#136F63] rounded-3xl sm:p-6 lg:p-7">
                        <img src={images[1]} alt="Abdullah Al Mumin" className="w-24 h-24 mx-auto my-4 rounded-full sm:w-40 sm:h-40 lg:w-[200px] lg:h-[200px]" />
                        <p className="text-base font-semibold text-center sm:text-lg">Mohammad Abdullah Al Mumin, PhD</p>
                        <p className="text-base text-center sm:text-lg">Member</p>
                        <p className="text-justify pt-3 sm:pt-4 lg:pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quia, ex laudantium perspiciatis atque expedita quidem a voluptatum? Maiores, eos atque.</p>
                    </div>
                    <div className="min-h-[240px] p-5 border border-[#136F63] rounded-3xl sm:p-6 lg:p-7">
                        <img src={images[2]} alt="Muntaha Rakib" className="w-24 h-24 mx-auto my-4 rounded-full sm:w-40 sm:h-40 lg:w-[200px] lg:h-[200px]" />
                        <p className="text-base font-semibold text-center sm:text-lg">Dr. Muntaha Rakib</p>
                        <p className="text-base text-center sm:text-lg">Member Secretary</p>
                        <p className="text-justify pt-3 sm:pt-4 lg:pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, suscipit unde impedit tenetur nisi fugit reiciendis ea, totam perspiciatis aspernatur beatae.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Quote