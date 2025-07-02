// components/SimilarHotels.tsx
'use client';
import React, { useEffect, useRef } from 'react';
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
    image: '/hotel-image-placeholder.jpg',
    rating: 4.5,
    title: 'Sofitel Algiers Hamma Garden',
    description: 'Experience luxurious accommodations overlooking the stunning Botanical Garden of Hamma. Perfect for a relaxing getaway.',
    price: 699,
    bedrooms: 2,
    bathrooms: 2,
    sqFt: 1200,
  },
  {
    id: 'h2',
    image: '/hotel-image-placeholder.jpg',
    rating: 4.8,
    title: 'Grand Hyatt Algiers Retreat',
    description: 'A serene escape in the heart of the city, offering unparalleled service and breathtaking views of the coastline.',
    price: 750,
    bedrooms: 3,
    bathrooms: 2,
    sqFt: 1500,
  },
  {
    id: 'h3',
    image: '/hotel-image-placeholder.jpg',
    rating: 4.2,
    title: 'Hilton Garden Inn Algiers',
    description: 'Comfortable and convenient stay with modern amenities. Ideal for both business and leisure travelers.',
    price: 580,
    bedrooms: 1,
    bathrooms: 1,
    sqFt: 800,
  },
  {
    id: 'h4',
    image: '/hotel-image-placeholder.jpg',
    rating: 4.6,
    title: 'Marriott Executive Apartments',
    description: 'Spacious and fully equipped apartments for extended stays. Enjoy privacy with all hotel services.',
    price: 820,
    bedrooms: 2,
    bathrooms: 2,
    sqFt: 1300,
  },
  {
    id: 'h5',
    image: '/hotel-image-placeholder.jpg',
    rating: 4.9,
    title: 'The St. Regis Algiers',
    description: 'Indulge in bespoke luxury and exquisite dining experiences. An iconic destination for discerning travelers.',
    price: 999,
    bedrooms: 4,
    bathrooms: 3,
    sqFt: 2000,
  },
  {
    id: 'h6',
    image: '/hotel-image-placeholder.jpg',
    rating: 4.3,
    title: 'IBIS Algiers Centre',
    description: 'Budget-friendly comfort in a prime city center location. Perfect for exploring the city.',
    price: 450,
    bedrooms: 1,
    bathrooms: 1,
    sqFt: 700,
  },
  // Add more hotels to clearly demonstrate the "next page" effect
  {
    id: 'h7',
    image: '/hotel-image-placeholder.jpg',
    rating: 4.7,
    title: 'Four Points by Sheraton',
    description: 'Modern hotel with great facilities, close to business districts. Enjoy a comfortable and productive stay.',
    price: 620,
    bedrooms: 2,
    bathrooms: 1,
    sqFt: 1000,
  },
  {
    id: 'h8',
    image: '/hotel-image-placeholder.jpg',
    rating: 4.4,
    title: 'Hotel Sofitel Algiers',
    description: 'Another luxurious option by Sofitel, offering premium services and excellent city views.',
    price: 710,
    bedrooms: 2,
    bathrooms: 2,
    sqFt: 1100,
  },
  {
    id: 'h9',
    image: '/hotel-image-placeholder.jpg',
    rating: 4.1,
    title: 'Comfort Suites Algiers',
    description: 'Spacious suites designed for comfort and convenience, perfect for families or longer stays.',
    price: 590,
    bedrooms: 2,
    bathrooms: 1,
    sqFt: 950,
  },
  {
    id: 'h10',
    image: '/hotel-image-placeholder.jpg',
    rating: 4.0,
    title: 'Novotel Algiers',
    description: 'Contemporary hotel with a focus on guest experience and modern amenities, ideal for business trips.',
    price: 550,
    bedrooms: 1,
    bathrooms: 1,
    sqFt: 750,
  },
  {
    id: 'h11',
    image: '/hotel-image-placeholder.jpg',
    rating: 4.5,
    title: 'Hyatt Regency Algiers',
    description: 'Upscale hotel with diverse dining options and excellent event facilities. A top choice for luxury.',
    price: 880,
    bedrooms: 3,
    bathrooms: 2,
    sqFt: 1600,
  },
  {
    id: 'h12',
    image: '/hotel-image-placeholder.jpg',
    rating: 4.6,
    title: 'Residence Inn by Marriott',
    description: 'Extended-stay hotel with full kitchens in every suite, perfect for longer visits to Algiers.',
    price: 700,
    bedrooms: 2,
    bathrooms: 2,
    sqFt: 1250,
  },
  {
    id: 'h13',
    image: '/hotel-image-placeholder.jpg',
    rating: 4.2,
    title: 'Adel Hotel Algiers',
    description: 'A charming boutique hotel offering a personalized experience and comfortable lodging.',
    price: 520,
    bedrooms: 1,
    bathrooms: 1,
    sqFt: 650,
  },
  {
    id: 'h14',
    image: '/hotel-image-placeholder.jpg',
    rating: 4.7,
    title: 'Radisson Blu Hotel Algiers',
    description: 'Stylish hotel with a vibrant atmosphere, great for both leisure and business travelers seeking modern comforts.',
    price: 730,
    bedrooms: 2,
    bathrooms: 2,
    sqFt: 1300,
  },
];











const HotelCard: React.FC<{ hotel: HotelProps }> = ({ hotel }) => {
  return (
    <div className="flex-none w-80 bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={hotel.image}
          alt={hotel.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 left-3 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium flex items-center shadow">
          <svg
            className="w-4 h-4 text-yellow-500 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.565-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
          {hotel.rating}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{hotel.title}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{hotel.description}</p>
        <p className="text-xl font-bold text-gray-900 mb-4">
          ${hotel.price}{' '}
          <span className="text-sm font-normal text-gray-500">Per Night</span>
        </p>
        <div className="flex items-center text-gray-700 text-sm mb-4 space-x-4">
          <span>{hotel.bedrooms} Bed</span>
          <span>{hotel.bathrooms} Bath</span>
          <span>{hotel.sqFt} sq ft</span>
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">Book</button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const child = scrollRef.current.children[0] as HTMLElement;
      const scrollAmount = child?.offsetWidth || clientWidth;

      if (scrollLeft + clientWidth >= scrollWidth - scrollAmount / 2) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const startAutoScroll = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(scroll, 3000);
    }
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const pages: HotelProps[][] = [];
  for (let i = 0; i < DUMMY_HOTELS.length; i += 6) {
    pages.push(DUMMY_HOTELS.slice(i, i + 6));
  }


  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">You may also like</h2>
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide space-x-6 pb-4"
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {pages.map((page, idx) => (
          <div
            key={idx}
            className="flex-none w-[1168px]"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="grid grid-cols-3 gap-6">
              {page.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarHotels;
