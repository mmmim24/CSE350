import React from 'react';

const Carousel = () => {
    const [currentImage, setCurrentImage] = React.useState(0);
    const images = [
        '/banner1.jpg',
        '/banner2.jpg',
        '/banner3.jpg'
    ];
    const nextImage = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };
    const previousImage = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };
    React.useEffect(() => {
        const timer = setInterval(() => {
            nextImage();
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, [currentImage]);

    return (
        <React.Fragment>
            <div className="w-[780px] mt-[64px] justify-center items-center overflow-hidden relative my-[32px]">
                <div className='flex transition-transform ease-in duration-1000 ' style={{transform:`translateX(-${currentImage*100}%)`}}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`image ${index + 1}`}
                            className="w-full rounded-xl"
                        />
                    ))}
                </div>
                <div className='absolute inset-0 flex items-center justify-between p-4'>
                    <button
                        onClick={previousImage}
                        className='p-1 rounded-full shadow bg-white/50 text-gray-500 hover:bg-white'
                    >
                        ❮
                    </button>
                    <button
                        onClick={nextImage}
                        className='p-1 rounded-full shadow bg-white/50 text-gray-500 hover:bg-white'
                    >
                        ❯
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Carousel;

