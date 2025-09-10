'use client';
import Image from 'next/image';
import { useState } from 'react';

interface HeroProps {
  image: string;
  title: string;
  description: string;
}

export function Hero({ image, title, description }: HeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background color fallback while image loads */}
      <div className={`absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} />
      
      <div className="absolute inset-0">
        {!imageError ? (
          <>
            <Image
              src={image}
              alt={title}
              fill
              priority
              className={`object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
              sizes="100vw"
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                console.error('Failed to load hero image:', image);
                setImageError(true);
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </>
        ) : (
          // Fallback gradient if image fails to load
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
            <div className="absolute inset-0 bg-black bg-opacity-30" />
          </div>
        )}
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
