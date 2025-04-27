import React, { useEffect, useState } from 'react';

const images = [
  '/src/assets/Images/slider1.jpg',
  '/src/assets/Images/slider2.jpg',
  '/src/assets/Images/slider3.jpg',
  // Add more image paths here
];

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className="w-full h-64 md:h-96 overflow-hidden relative">
      <div className="w-full h-full transition-all duration-700 ease-in-out">
      <div class="text-center px-4">
    <h1 class="text-4xl md:text-6xl font-bold mb-4">Unleash Your Potential</h1>
    <p class="text-lg md:text-xl text-gray-300">Join the journey to create something amazing today.</p>
  </div>
        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AutoSlider;
