import { LocationData } from '@/types';

export const locations: LocationData[] = [
  {
    id: "sunset-villa",
    name: "Sunset Villa Resort",
    description: "Luxury beachfront resort with stunning ocean views and world-class amenities",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop&crop=center",
    amenities: ["Wi-Fi", "Pool", "Gym", "24/7 Security", "Spa", "Restaurant", "Beach Access", "Concierge"],
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop"
    ],
    address: "123 Ocean Drive, Malibu, CA 90265",
    coordinates: { lat: 34.0259, lng: -118.7798 }
  },
  {
    id: "mountain-peak",
    name: "Mountain Peak Lodge",
    description: "Serene mountain retreat with breathtaking alpine views and adventure activities",
    heroImage: "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?w=1920&h=1080&fit=crop&crop=center",
    amenities: ["Wi-Fi", "Pool", "Gym", "24/7 Security", "Ski Storage", "Fireplace Lounge", "Hiking Trails", "Spa"],
    gallery: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551524164-6cf2ac2c0d85?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop"
    ],
    address: "456 Alpine Way, Aspen, CO 81611",
    coordinates: { lat: 39.1911, lng: -106.8175 }
  },
  {
    id: "urban-downtown",
    name: "Urban Downtown Hotel",
    description: "Modern city center hotel with cutting-edge design and premium business amenities",
    heroImage: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&h=1080&fit=crop&crop=center",
    amenities: ["Wi-Fi", "Pool", "Gym", "24/7 Security", "Business Center", "Rooftop Bar", "Valet Parking", "Conference Rooms"],
    gallery: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop"
    ],
    address: "789 Metropolitan Ave, New York, NY 10001",
    coordinates: { lat: 40.7505, lng: -73.9934 }
  },
  {
    id: "coastal-paradise",
    name: "Coastal Paradise Resort",
    description: "Tropical paradise with pristine beaches, crystal clear waters, and luxury accommodations",
    heroImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=1080&fit=crop&crop=center",
    amenities: ["Wi-Fi", "Pool", "Gym", "24/7 Security", "Water Sports", "Beach Bar", "Sunset Deck", "Massage Services"],
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop"
    ],
    address: "321 Paradise Bay, Key West, FL 33040",
    coordinates: { lat: 24.5551, lng: -81.7800 }
  }
];
