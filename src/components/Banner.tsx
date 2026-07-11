import React, { useEffect, useState } from "react";
import './BannerStyle.css'

const images = [ 'src/assets/banner/morena.png', 'src/assets/banner/apples.png', 'src/assets/banner/kareliv.png', 'src/assets/banner/study.png'];

export default function Banner() {
   const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
       const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

    return (
        <div className="image-container">
            <img src={images[currentIndex]} />
        </div>
    )
}

