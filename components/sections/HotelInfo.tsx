'use client';

import { MapPin, Car, Waves, Utensils } from 'lucide-react';
import { Hotel, Review } from '@/types/hotel';

interface HotelInfoProps {
  hotel: Hotel;
  reviews: Review[];
}

export default function HotelInfo({ hotel, reviews }: HotelInfoProps) {
  return (
    <div className="w-full mx-auto px-4 py-8">
      {/* About this property */}
      <div className='mb-8'>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About this property</h2>
        <p className="text-gray-600 leading-relaxed">
          The Executive Suite at El Aurassi Hotel in Algiers offers a luxurious and spacious experience tailored for both business and leisure travelers. With its modern design and panoramic views of the Mediterranean Sea, the suite combines comfort, elegance, and functionality.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Explore */}
        <div className="space-y-8">
          {/* Explore the Area */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore the Area</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Restaurants & cafes */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 mr-3">
                      <Utensils className="w-5 h-5 text-gray-600" />
                    </div>
                    <h3 className="font-medium text-gray-900">Restaurants & cafes</h3>
                  </div>
                  <div className="space-y-2 ml-9">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Blue Cafe</span>
                      <span className="text-gray-500">1.4 km</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Blue Cafe</span>
                      <span className="text-gray-500">1.4 km</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Blue Cafe</span>
                      <span className="text-gray-500">1.4 km</span>
                    </div>
                  </div>
                </div>

                {/* Beaches */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 mr-3">
                      <Waves className="w-5 h-5 text-gray-600" />
                    </div>
                    <h3 className="font-medium text-gray-900">Beaches</h3>
                  </div>
                  <div className="space-y-2 ml-9">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Les Dunes Beach</span>
                      <span className="text-gray-500">1.4 km</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Les Dunes Beach</span>
                      <span className="text-gray-500">1.4 km</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Les Dunes Beach</span>
                      <span className="text-gray-500">1.4 km</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Shops & Markets */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 mr-3">
                      <MapPin className="w-5 h-5 text-gray-600" />
                    </div>
                    <h3 className="font-medium text-gray-900">Shops & Markets</h3>
                  </div>
                  <div className="space-y-2 ml-9">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Central Mall</span>
                      <span className="text-gray-500">1.4 km</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Central Mall</span>
                      <span className="text-gray-500">1.4 km</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Central Mall</span>
                      <span className="text-gray-500">1.4 km</span>
                    </div>
                  </div>
                </div>

                {/* Public transport */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 mr-3">
                      <Car className="w-5 h-5 text-gray-600" />
                    </div>
                    <h3 className="font-medium text-gray-900">Public transport</h3>
                  </div>
                  <div className="space-y-2 ml-9">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Train - Riverdale Central Station</span>
                      <span className="text-gray-500">1.4 km</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Metro - Cityline Metro Hub</span>
                      <span className="text-gray-500">1.4 km</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Metro - Cityline Metro Hub</span>
                      <span className="text-gray-500">1.4 km</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Google Map */}
        <div className="relative">
          <div className="bg-gray-200 rounded-lg h-96 lg:h-full min-h-[400px] relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.4537479564287!2d3.0422!3d36.7753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb276c0a33c2f%3A0x5f5f5f5f5f5f5f5f!2sAlgiers%2C%20Algeria!5e0!3m2!1sen!2sus!4v1635724800000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
            
            {/* Explore Button Overlay */}
            <div className="absolute bottom-4 right-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-lg">
                Explore the Area
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
