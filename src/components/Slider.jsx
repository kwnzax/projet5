import { useState } from 'react';

function Slider({ pictures }) {
    if (!pictures || pictures.length === 0) {
        return null;}

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlide = pictures.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlide);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlide) % totalSlide);
    };

    return (
        <div className="slider">
            {totalSlide > 1 && (
                <>
                    <button className="arrow left" onClick={prevSlide}>‹</button>
                    <button className="arrow right" onClick={nextSlide}>›</button>
                </>
            )}

            <img
                key={currentIndex}
                src={pictures[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="slide-image"
            />

            {totalSlide > 1 && (
                <div className="counter">
                    {currentIndex + 1} / {totalSlide}
                </div>
            )}
        </div>
    );
}

export default Slider;