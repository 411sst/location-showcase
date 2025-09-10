'use client';
import Image from 'next/image';

interface HeroProps {
  image: string;
  title: string;
  description: string;
}

export function Hero({ image, title, description }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
        <div className="max-w-4xl px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}