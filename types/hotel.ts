export interface Hotel {
  id: string;
  name: string;
  description: string;
  images: string[];
  location: {
    address: string;
    city: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  amenities: string[];
  rating: number;
  reviewCount: number;
  priceRange: {
    min: number;
    max: number;
  };
  rooms: Room[];
}

export interface Room {
  id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  originalPrice?: number;
  maxGuests: number;
  bedType: string;
  amenities: string[];
  size: number; // in square meters
  available: boolean;
}

export interface BookingFormData {
  checkIn: Date;
  checkOut: Date;
  guests: {
    adults: number;
    children: number;
  };
  rooms: number;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: Date;
  helpful: number;
}
