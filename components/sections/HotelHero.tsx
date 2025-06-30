'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, MapPin, Share, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HotelHeroProps {
  name: string;
  images: string[];
  rating: number;
  reviewCount: number;
  location: {
    address: string;
    city: string;
    country: string;
  };
}

export default function HotelHero({ name, images, rating, reviewCount, location }: HotelHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white ">
      <div className="w-full  mx-auto  py-6">
        {/* Hotel name and actions */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
            <p className="text-gray-600 mb-4">
              Spacious, modern rooms with panoramic views of the Mediterranean Sea.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{location.address}, {location.city}, {location.country}</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{rating}</span>
                <span className="ml-1">({reviewCount.toLocaleString()} reviews)</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="flex items-center">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="flex items-center">
              <Heart className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 px-6">
              Reserve →
            </Button>
          </div>
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-4 gap-2 h-96 rounded-lg overflow-hidden">
          {/* Main image */}
          <div className="col-span-2 row-span-2 relative">
            <Image
              src={images[currentImageIndex] || '/images/hotel-placeholder.svg'}
              alt={`${name} - Main view`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200">
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Thumbnail images */}
          {images.slice(1, 5).map((image, index) => (
            <div key={index} className="relative cursor-pointer" onClick={() => setCurrentImageIndex(index + 1)}>
              <Image
                src={image || '/images/hotel-placeholder.svg'}
                alt={`${name} - View ${index + 2}`}
                fill
                className="object-cover hover:opacity-80 transition-opacity"
              />
              {index === 3 && images.length > 5 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white font-medium">+{images.length - 5} more</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
