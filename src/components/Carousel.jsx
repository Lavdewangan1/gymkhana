import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from 'react-responsive-carousel';

const Carousel = ({ images, className, onChange }) => {
    return (
        <div className={className}>
            <ReactCarousel
                infiniteLoop={true}
                emulateTouch={true}
                autoPlay={true}
                interval={3000}
                showThumbs={false}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                stopOnHover={false}
                onChange={onChange}
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt="carousel image"/>
                    </div>
                ))}
            </ReactCarousel>
        </div>
    );
};

export default Carousel;