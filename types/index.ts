export interface LocationData {
  id: string;
  name: string;
  description: string;
  heroImage: string;
  amenities: string[];
  gallery: string[];
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}