'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroProps {
  image: string;
  title: string;
  description: string;
}

export function Hero({ image, title, description }: HeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Fallback gradient - only visible if image fails */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Use Next.js Image component for better loading */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        quality={100}
        className={`object-cover transition-opacity duration-1000 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setImageLoaded(true)}
        sizes="100vw"
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
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