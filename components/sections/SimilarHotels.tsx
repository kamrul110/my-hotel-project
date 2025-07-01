// components/SimilarHotels.tsx
'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// 1. Define the type for a single hotel's data
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

// 2. Sample Hotel Data (Extended to have more items for scrolling through pages)
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

// 3. HotelCard Component (remains the same as it represents a single card)
const HotelCard: React.FC<{ hotel: HotelProps }> = ({ hotel }) => {
  return (
    <div
      key={hotel.id}
      className="flex-none w-80 bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <div className="relative h-48 w-full">
        <Image
          src={hotel.image}
          alt={hotel.title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-3 left-3 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium flex items-center shadow">
          <svg
            className="w-4 h-4 text-yellow-500 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.565-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
          </svg>
          {hotel.rating}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {hotel.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {hotel.description}
        </p>
        <p className="text-xl font-bold text-gray-900 mb-4">
          ${hotel.price}{' '}
          <span className="text-sm font-normal text-gray-500">Per Night</span>
        </p>

        <div className="flex items-center text-gray-700 text-sm mb-4 space-x-4">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-1 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2zm3-12h.01M16 12h.01"
              ></path>
            </svg>
            <span>{hotel.bedrooms} Bedroom</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-1 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 11.5v-10A1.5 1.5 0 018.5 0h7A1.5 1.5 0 0117 1.5v10m-1.5 0v.5a2 2 0 01-2 2h-7a2 2 0 01-2-2v-.5h-1.5a1.5 1.5 0 00-1.5 1.5v4a1.5 1.5 0 001.5 1.5h10A1.5 1.5 0 0017 17.5v-4a1.5 1.5 0 00-1.5-1.5H15.5z"
              ></path>
            </svg>
            <span>{hotel.bathrooms} Bathroom new</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-1 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 6l3 1m0 0l-3 9a5 5 0 0010.27.24l3 11a5 5 0 004.93 3.66l3-1.5m-3-12.02l3 9a5 5 0 004.93 3.66l3-1.5m-3-12.02l-3-9a5 5 0 00-4.93-3.66l-3 1.5"
              ></path>
            </svg>
            <span>{hotel.sqFt} sq ft then</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
            Book 
          </button>
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
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// 4. Main SimilarHotels Component
const SimilarHotels: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to start the automatic scrolling
  const startAutoplay = () => {
    stopAutoplay(); // Clear any existing interval first

    intervalRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        // Calculate the width of one "page" of cards (3 cards + their gaps)
        // Card width: 320px (w-80)
        // Gap between cards: 24px (space-x-6)
        // 3 cards + 2 gaps between them = (3 * 320) + (2 * 24) = 960 + 48 = 1008px
        // We also need to consider the padding or margin of the main container if it affects the visible area.
        // Let's assume one "page" is roughly 3 cards wide (including their gaps)
        // We need to find the exact width of one group of items, which is the clientWidth itself or slightly less
        // If clientWidth is designed to show 3 full cards + a peek, then the scrollAmount should be the width of 3 full cards + 2 gaps.
        // Let's use the actual clientWidth as the scroll target to scroll one "page" at a time.
        // Or, more accurately, the width of the FIRST child element (which is a grid page)
        const firstChild = scrollContainerRef.current.children[0] as HTMLElement;
        const scrollAmount = firstChild ? firstChild.offsetWidth : clientWidth;


        // If we are near the end, scroll back to the beginning
        // We check if the remaining scrollable distance is less than half a "page"
        if (scrollLeft + clientWidth >= scrollWidth - (scrollAmount / 2) ) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise, scroll to the next "page"
          scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3000); // Scroll every 3 seconds
  };

  // Function to stop the automatic scrolling
  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Effect to manage autoplay on mount and unmount
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  // Group hotels into chunks of 6 (3 cards per row, 2 rows) for each "page"
  const hotelPages: HotelProps[][] = [];
  for (let i = 0; i < DUMMY_HOTELS.length; i += 6) {
    hotelPages.push(DUMMY_HOTELS.slice(i, i + 6));
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">You may also like</h2>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll scrollbar-hide space-x-6 pb-4" // space-x-6 is for space between grid pages
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
        style={{ scrollSnapType: 'x mandatory' }} // Ensures snapping to each "page"
      >
        {hotelPages.map((page, pageIndex) => (
          // Each 'page' will be a flex item that itself contains a grid of hotels
          <div
            key={pageIndex}
            className="flex-none" // Makes this page not shrink
            // Calculate width for each "page" to show 3 full cards and a peek of the next.
            // 3 cards = 3 * w-80 (3 * 320px) = 960px
            // 2 gaps = 2 * space-x-6 (2 * 24px) = 48px
            // Total width for 3 cards: 960 + 48 = 1008px.
            // Let's make the container slightly less than 3 cards wide so the next one peeks.
            // A good way is to make the outer container for the carousel `w-full`
            // and ensure the inner scrollable items (these `page` divs) have a calculated width.
            // For a "peek" effect, we want the container to show about 2.5 cards or 2.8 cards.
            // Since our inner grid is 3 columns, we'll aim to show 3 columns + a bit of the next.
            // We set the width explicitly here for the 'page' so the scrollAmount works.
            // Let's set it to be slightly more than 3 cards width, ensuring it aligns nicely.
            // 3 cards (w-80) + 2 gaps (space-x-6) = 1008px. Let's make it 1008px.
            // This 'page' needs to be slightly wider than the viewport if we want a 'peek' of the next page.
            // Or, simpler, the container should be wide enough to show 3 items + a partial item.
            // A more robust approach might involve dynamically calculating this.
            // For now, let's assume the outer container provides the correct viewport width.
            // This 'page' div will simply contain the grid.
            // We need to ensure the width of this `div` is exactly what we want to scroll by.
            // To show 3 cards + peek:
            // (3 * 320px) + (2 * 24px) = 1008px for 3 cards and their inner gaps.
            // Add some extra to show a peek. Say, 1008px + (0.5 * 320px) = 1168px
            // Let's adjust this for `w-full` for the outer container and let Tailwind handle the grid spacing.

            // To achieve the 'peek' and clean scrolling, we need to ensure the parent
            // `overflow-x-scroll` has enough width to display 3 cards + a bit of the 4th,
            // while each `page` (which is a grid of 6 cards) takes up a calculated width.

            // Let's target a desktop width where 3 cards + peek is visible.
            // The `grid` inside will handle the 3 columns.
            // The `w-[calc(3*320px_+_2*24px_+_20px)]` makes each scrollable "page" contain 3 full cards
            // plus some extra space to show a hint of the next page.
            // Adjust the `+ 20px` as needed for the desired "peek" amount.
            className="flex-none w-[calc(3*theme(spacing.80)+2*theme(spacing.6)+theme(spacing.12))]" // A custom width to fit 3 cards + gaps + a peek. 320px * 3 + 24px * 2 + 48px (for peek)
            style={{ scrollSnapAlign: 'start' }} // Snap to the start of each page
          >
            <div className="grid grid-cols-3 gap-6"> {/* This is the 3-column grid for the two rows */}
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