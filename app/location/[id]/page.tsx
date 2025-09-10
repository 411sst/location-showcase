import { notFound } from 'next/navigation';
import { locations } from '@/data/locations';
import { LocationClient } from './LocationClient';

interface LocationPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { id } = await params;
  const location = locations.find(loc => loc.id === id);

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