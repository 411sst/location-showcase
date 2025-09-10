'use client';
import { LocationData } from '@/types';
import { withAuth } from '@/components/withAuth';
import { Hero } from '@/components/Hero';
import { Amenities } from '@/components/Amenities';
import { ImageCarousel } from '@/components/ImageCarousel';
import { QueryForm } from '@/components/QueryForm';

interface LocationClientProps {
  location: LocationData;
}

function LocationContent({ location }: LocationClientProps) {
  return (
    <div className="min-h-screen">
      {/* REQUIRED COMPONENT 1: Hero Section */}
      <Hero 
        image={location.heroImage}
        title={location.name}
        description={location.description}
      />
      
      {/* REQUIRED COMPONENT 2: Amenities Section */}
      <Amenities amenities={location.amenities} />
      
      {/* REQUIRED COMPONENT 3: Image Carousel */}
      <ImageCarousel 
        images={location.gallery}
        alt={location.name}
      />
      
      {/* REQUIRED COMPONENT 4: Query Form */}
      <QueryForm />
    </div>
  );
}

// Wrap with authentication
const ProtectedLocationContent = withAuth(LocationContent);

export function LocationClient({ location }: LocationClientProps) {
  return <ProtectedLocationContent location={location} />;
}