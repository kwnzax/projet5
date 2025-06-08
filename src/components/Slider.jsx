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
                <div className="sliderNavBtn">
                    <button className="prevBtn" onClick={prevSlide}>‹</button>
                    <button className="nextBtn" onClick={nextSlide}>›</button>
                </div>
            )}

            <img
                key={currentIndex}
                src={pictures[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="slideImage"
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