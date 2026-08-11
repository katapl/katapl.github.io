import React, { useEffect, useState } from "react";
import './BannerStyle.css'

// const images = [ '/banner/morena.png', '/banner/homesick.png', '/banner/grime.png', '/banner/morena2.png'];

export default function Banner({ optimizedImages }: { optimizedImages: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === optimizedImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [optimizedImages.length]);

  return (
    <div className="banner-container">
      {optimizedImages.map((imgSrc, index:any) => (
        <img
          key={index}
          src={imgSrc}
          alt={`Banner ${index + 1}`}
          className={`banner-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}
