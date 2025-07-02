// components/SimilarHotels.tsx
'use client';
import React from 'react';
import Image from 'next/image';

interface HotelProps {
  id: string;
  image: string;
  rating: number;
  title: string;
  description: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqFt: number;
}

const DUMMY_HOTELS: HotelProps[] = [
  {
    id: 'h1',
    image: '/images/place.png',
    rating: 4.5,
    title: 'Sofitel Algiers Hamma Garden',
    description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
    price: 699,
    bedrooms: 2,
    bathrooms: 2,
    sqFt: 1200,
  },
  {
    id: 'h2',
    image: '/images/place.png',
    rating: 4.8,
    title: 'Sofitel Algiers Hamma Garden',
    description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
    price: 699,
    bedrooms: 2,
    bathrooms: 2,
    sqFt: 1200,
  },
  {
    id: 'h3',
    image: '/images/place.png',
    rating: 4.5,
    title: 'Sofitel Algiers Hamma Garden',
    description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
    price: 699,
    bedrooms: 2,
    bathrooms: 2,
    sqFt: 1200,
  },
  {
    id: 'h4',
    image: '/images/place.png',
    rating: 4.5,
    title: 'Sofitel Algiers Hamma Garden',
    description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
    price: 699,
    bedrooms: 2,
    bathrooms: 2,
    sqFt: 1200,
  },
  {
    id: 'h5',
    image: '/images/place.png',
    rating: 4.5,
    title: 'Sofitel Algiers Hamma Garden',
    description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
    price: 699,
    bedrooms: 2,
    bathrooms: 2,
    sqFt: 1200,
  },
  {
    id: 'h6',
    image: '/images/place.png',
    rating: 4.5,
    title: 'Sofitel Algiers Hamma Garden',
    description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
    price: 699,
    bedrooms: 2,
    bathrooms: 2,
    sqFt: 1200,
  },
  {
    id: 'h7',
    image: '/images/place.png',
    rating: 4.5,
    title: 'Sofitel Algiers Hamma Garden',
    description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
    price: 699,
    bedrooms: 2,
    bathrooms: 2,
    sqFt: 1200,
  },
  {
    id: 'h8',
    image: '/images/place.png',
    rating: 4.5,
    title: 'Sofitel Algiers Hamma Garden',
    description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
    price: 699,
    bedrooms: 2,
    bathrooms: 2,
    sqFt: 1200,
  },
];

const HotelCard: React.FC<{ hotel: HotelProps }> = ({ hotel }) => {
  return (
    <div className="flex-none w-64 xs:w-72 sm:w-72 md:w-80 lg:w-80 overflow-hidden transition-all duration-300">
      <div className="relative h-40 xs:h-44 sm:h-52 md:h-56 w-full rounded-lg overflow-hidden">
        <Image
          src={hotel.image}
          alt={hotel.title}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-black bg-opacity-60 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium flex items-center text-white backdrop-blur-sm">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-1 sm:mr-1.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.565-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
          {hotel.rating}
        </div>
      </div>
      <div className="mt-2 xs:mt-3 mb-3 xs:mb-4 sm:mt-2 sm:mb-6">
        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 leading-tight">{hotel.title}</h3>
        <p className="text-xs sm:text-sm text-gray-500 mb-2 xs:mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 leading-relaxed">{hotel.description}</p>
        
        <div className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4">
          <span>{hotel.price}</span>
          <span className="text-xs sm:text-sm font-normal text-gray-500 ml-1">Per Night</span>
        </div>

        <div className="flex items-center justify-between text-gray-600 text-xs sm:text-sm mb-3 xs:mb-4 sm:mb-5">
          <span className="flex items-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
            </svg>
            <span className="font-medium">{hotel.bedrooms}</span> <span className="hidden xs:inline">Bedroom</span><span className="xs:hidden">Bed</span>
          </span>
          <span className="flex items-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11" />
            </svg>
            <span className="font-medium">{hotel.bathrooms}</span> <span className="hidden xs:inline">Bathroom</span><span className="xs:hidden">Bath</span>
          </span>
          <span className="flex items-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span className="font-medium">{hotel.sqFt}</span> sq ft
          </span>
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-[#1E88E5] hover:bg-[#1976D2] text-white py-2 px-4 xs:px-6 sm:py-3 sm:px-12 rounded-full font-semibold text-xs sm:text-sm transition-colors duration-200 shadow-sm">
            Book Now
          </button>
          <button className="p-2 sm:p-2.5 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors duration-200 border border-gray-200">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const SimilarHotels: React.FC = () => {
  const topRowHotels = DUMMY_HOTELS.slice(0, 4);
  const bottomRowHotels = DUMMY_HOTELS.slice(4, 8);

  return (
    <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">You may also like</h2>
      
      {/* Mobile: Single scrollable row */}
      <div className="block sm:hidden">
        <div 
          className="overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div className="flex space-x-3 xs:space-x-4 pb-4 px-1">
            {DUMMY_HOTELS.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </div>

      {/* Tablet and Desktop: Two rows */}
      <div className="hidden sm:block">
        <div className="overflow-x-auto" style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#c1c1c1 #f1f1f1'
        }}>
          <div className="min-w-max space-y-4 lg:space-y-6 pb-4">
            {/* Top Row */}
            <div className="flex space-x-4 lg:space-x-6">
              {topRowHotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>

            {/* Bottom Row */}
            <div className="flex space-x-4 lg:space-x-6">
              {bottomRowHotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarHotels;
