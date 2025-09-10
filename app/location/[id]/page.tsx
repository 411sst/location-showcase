import { notFound } from 'next/navigation';
import { locations } from '@/data/locations';
import { LocationClient } from './LocationClient';

interface LocationPageProps {
  params: {
    id: string;
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = locations.find(loc => loc.id === params.id);

  if (!location) {
    notFound();
  }

  return <LocationClient location={location} />;
}

// Generate static params for all 4 locations
export async function generateStaticParams() {
  return locations.map((location) => ({
    id: location.id,
  }));
}