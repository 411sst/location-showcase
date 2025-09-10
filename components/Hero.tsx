'use client';
import { useState, useEffect } from 'react';

interface HeroProps {
  image: string;
  title: string;
  description: string;
}

export function Hero({ image, title, description }: HeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.error('Failed to load image:', image);
      setImageLoaded(true); // Still show content even if image fails
    };
  }, [image]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Always show a background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Image with fade-in effect */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
        <div className="max-w-4xl px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl animate-fade-in">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto animate-fade-in-delay">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
