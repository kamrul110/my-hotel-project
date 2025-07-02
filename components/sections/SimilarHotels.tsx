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
      <div className="relative h-40 xs:h-44 sm:h-52 md:h-56 w-full rounded-lg overflow-hidden mb-4">
        <Image
          src={hotel.image}
          alt={hotel.title}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3  px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium flex items-center text-white ">
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

        <div className="flex items-center justify-between text-gray-600 text-xs sm:text-sm mb-3 xs:mb-4 sm:mb-5 space  ">
          <span className="flex items-center ">
            {/*  */}
          <div className='flex space-x-2 '>
             <div>
             <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
              <path d="M2.7709 18.2545V6.29614C2.7709 3.88019 2.7709 2.67222 3.52144 1.92168C4.27197 1.17114 5.47995 1.17114 7.8959 1.17114H9.60423C12.0202 1.17114 13.2282 1.17114 13.9787 1.92168C14.7292 2.67222 14.7292 3.88019 14.7292 6.29614V18.2545H2.7709Z" stroke="#626262" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5.3334 8.85864V5.44198C5.3334 4.02861 5.62837 3.73364 7.04173 3.73364H10.4584C11.8718 3.73364 12.1667 4.02861 12.1667 5.44198V8.85864C12.1667 10.272 11.8718 10.567 10.4584 10.567H7.04173C5.62837 10.567 5.3334 10.272 5.3334 8.85864Z" stroke="#626262" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M1.06256 18.2546H16.4376" stroke="#626262" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.75006 3.73364V10.567M12.1667 7.15031L5.3334 7.15031" stroke="#626262" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5.34023 13.9836L5.33256 13.9836" stroke="#626262" stroke-width="1.70833" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
           </div>
            <div>
              <span className="font-medium">{hotel.bedrooms}</span> 
            </div>
          </div>
            <span className="hidden xs:inline ">Bedroom</span><span className="xs:hidden">Bedroom</span>
          </span>
          <span className="flex items-center  ">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
  <path d="M4.25007 15.3794L3.41673 16.2127M14.2501 15.3794L15.0834 16.2127" stroke="#626262" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M1.75006 8.71289V9.54622C1.75006 12.2961 1.75006 13.671 2.60433 14.5253C3.4586 15.3796 4.83353 15.3796 7.58339 15.3796H10.9167C13.6666 15.3796 15.0415 15.3796 15.8958 14.5253C16.7501 13.671 16.7501 12.2961 16.7501 9.54622V8.71289" stroke="#626262" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M0.916733 8.71289H17.5834" stroke="#626262" stroke-linecap="round"/>
  <path d="M2.58339 8.71289V3.31573C2.58339 2.15436 3.52486 1.21289 4.68623 1.21289C5.6181 1.21289 6.43884 1.82621 6.70288 2.7199L6.75006 2.87956" stroke="#626262" stroke-linecap="round"/>
  <path d="M5.91673 3.71281L8.00007 2.04614" stroke="#626262" stroke-width="1.5" stroke-linecap="round"/>
</svg>
            <span className="font-medium ml-2">{hotel.bathrooms}</span> 
            <span className="hidden xs:inline">Bathroom</span><span className="xs:hidden">Bathroom</span>
          </span>
          <span className="flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M3.8334 17.3796H3.3334V17.8796H3.8334V17.3796ZM8.35362 13.5665C8.54889 13.3713 8.54889 13.0547 8.35362 12.8594C8.15836 12.6642 7.84178 12.6642 7.64652 12.8594L8.35362 13.5665ZM3.8334 12.3796H3.3334V17.3796H3.8334H4.3334V12.3796H3.8334ZM3.8334 17.3796V17.8796H8.8334V17.3796V16.8796H3.8334V17.3796ZM3.8334 17.3796L4.18696 17.7332L8.35362 13.5665L8.00007 13.213L7.64652 12.8594L3.47985 17.0261L3.8334 17.3796Z" fill="#626262"/>
  <path d="M17.1667 4.04614H17.6667V3.54614H17.1667V4.04614ZM12.6465 7.85926C12.4512 8.05452 12.4512 8.3711 12.6465 8.56636C12.8418 8.76162 13.1583 8.76162 13.3536 8.56636L12.6465 7.85926ZM17.1667 9.04614H17.6667V4.04614H17.1667H16.6667V9.04614H17.1667ZM17.1667 4.04614V3.54614H12.1667V4.04614V4.54614H17.1667V4.04614ZM17.1667 4.04614L16.8132 3.69259L12.6465 7.85926L13.0001 8.21281L13.3536 8.56636L17.5203 4.3997L17.1667 4.04614Z" fill="#626262"/>
</svg>
            <span className="font-medium ml-2">{hotel.sqFt}</span> <sub>sq ft</sub>
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
