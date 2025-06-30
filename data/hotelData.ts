import { Hotel, Room, Review } from '@/types/hotel';

export const hotelData: Hotel = {
  id: 'el-aurassi-hotel',
  name: 'El Aurassi Hotel',
  description: 'A luxurious hotel offering world-class amenities and exceptional service in the heart of the city.',
  images: [
    '/images/hotel-placeholder.svg',
    '/images/hotel-placeholder.svg',
    '/images/hotel-placeholder.svg',
    '/images/hotel-placeholder.svg',
    '/images/hotel-placeholder.svg',
    '/images/hotel-placeholder.svg'
  ],
  location: {
    address: '123 Luxury Street',
    city: 'New York',
    country: 'United States',
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  amenities: [
    'Free WiFi',
    'Swimming Pool',
    'Fitness Center',
    'Spa & Wellness',
    'Restaurant',
    'Room Service',
    'Business Center',
    'Concierge',
    'Valet Parking',
    'Pet Friendly'
  ],
  rating: 4.8,
  reviewCount: 2847,
  priceRange: {
    min: 150,
    max: 500
  },
  rooms: []
};

export const roomsData: Room[] = [
  {
    id: 'deluxe-ocean-view',
    name: 'Deluxe Ocean View',
    description: 'Spacious room with stunning ocean views and modern amenities.',
    images: [
      '/images/room-placeholder.svg',
      '/images/room-placeholder.svg',
      '/images/room-placeholder.svg'
    ],
    price: 250,
    originalPrice: 300,
    maxGuests: 2,
    bedType: 'King Size Bed',
    amenities: ['Ocean View', 'Balcony', 'Mini Bar', 'Coffee Machine', 'Free WiFi'],
    size: 45,
    available: true
  },
  {
    id: 'superior-city-view',
    name: 'Superior City View',
    description: 'Comfortable room with city skyline views and premium facilities.',
    images: [
      '/images/room-placeholder.svg',
      '/images/room-placeholder.svg',  
      '/images/room-placeholder.svg'
    ],
    price: 180,
    maxGuests: 2,
    bedType: 'Queen Size Bed',
    amenities: ['City View', 'Work Desk', 'Mini Bar', 'Coffee Machine', 'Free WiFi'],
    size: 35,
    available: true
  },
  {
    id: 'standard-room',
    name: 'Standard Room',
    description: 'Cozy and comfortable room with all essential amenities.',
    images: [
      '/images/room-placeholder.svg',
      '/images/room-placeholder.svg',
      '/images/room-placeholder.svg'
    ],
    price: 150,
    maxGuests: 2,
    bedType: 'Double Bed',
    amenities: ['Garden View', 'Work Desk', 'Coffee Machine', 'Free WiFi'],
    size: 25,
    available: true
  }
];

export const reviewsData: Review[] = [
  {
    id: '1',
    userName: 'John Smith',
    rating: 5,
    comment: 'Exceptional service and beautiful rooms. The ocean view was breathtaking!',
    date: new Date('2024-12-15'),
    helpful: 24
  },
  {
    id: '2',
    userName: 'Sarah Johnson',
    rating: 4,
    comment: 'Great location and friendly staff. The breakfast was amazing.',
    date: new Date('2024-12-10'),
    helpful: 18
  },
  {
    id: '3',
    userName: 'Michael Brown',
    rating: 5,
    comment: 'Perfect for a business trip. The facilities were top-notch.',
    date: new Date('2024-12-08'),
    helpful: 31
  }
];

// Update hotel data with rooms
hotelData.rooms = roomsData;
