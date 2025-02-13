import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageGallery = ({ carDetail }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = current.clientWidth;
            current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            scroll('right');
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-[500px] relative overflow-hidden rounded-xl">
            {/* Previous Button */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 z-10"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Image Container */}
            <div
                ref={scrollRef}
                className="flex h-full w-full overflow-x-scroll scroll-smooth scrollbar-none"
            >
                {carDetail?.images.map((image, index) => (
                    <img
                        key={index}
                        src={image.imageUrl}
                        alt={`Car Image ${index + 1}`}
                        className="flex-shrink-0 w-full h-full object-cover"
                    />
                ))}
            </div>

            {/* Next Button */}
            <button
                onClick={() => scroll('right')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 z-10"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default ImageGallery;
