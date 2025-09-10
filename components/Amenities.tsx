'use client';
import { 
  Wifi, 
  Car, 
  Dumbbell, 
  Shield, 
  Utensils, 
  Waves,
  Mountain,
  Building,
  Coffee,
  Sparkles
} from 'lucide-react';

interface AmenitiesProps {
  amenities: string[];
}

const amenityIcons: Record<string, React.ReactNode> = {
  'Wi-Fi': <Wifi className="w-8 h-8" />,
  'Pool': <Waves className="w-8 h-8" />,
  'Gym': <Dumbbell className="w-8 h-8" />,
  '24/7 Security': <Shield className="w-8 h-8" />,
  'Spa': <Sparkles className="w-8 h-8" />,
  'Restaurant': <Utensils className="w-8 h-8" />,
  'Valet Parking': <Car className="w-8 h-8" />,
  'Business Center': <Building className="w-8 h-8" />,
  'Beach Access': <Waves className="w-8 h-8" />,
  'Concierge': <Shield className="w-8 h-8" />,
  'Ski Storage': <Mountain className="w-8 h-8" />,
  'Fireplace Lounge': <Coffee className="w-8 h-8" />,
  'Hiking Trails': <Mountain className="w-8 h-8" />,
  'Rooftop Bar': <Building className="w-8 h-8" />,
  'Conference Rooms': <Building className="w-8 h-8" />,
  'Water Sports': <Waves className="w-8 h-8" />,
  'Beach Bar': <Coffee className="w-8 h-8" />,
  'Sunset Deck': <Sparkles className="w-8 h-8" />,
  'Massage Services': <Sparkles className="w-8 h-8" />,
};

export function Amenities({ amenities }: AmenitiesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Premium Amenities
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="text-blue-600 mb-4">
                {amenityIcons[amenity] || <Shield className="w-8 h-8" />}
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900">
                {amenity}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}