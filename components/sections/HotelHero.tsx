'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Share, Heart,  Wifi, Car, Coffee, Dumbbell, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
  
  const [activeTab, setActiveTab] = useState('Over View');


  const tabs = ['Over View', 'Features', 'Reviews'];

  return (
    <div className="bg-white">
      <div className="w-full mx-auto py-6 px-4">
        {/* Hotel Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
            <p className="text-gray-600 mb-4">
              Spacious new rules, modern rooms with panoramic views of the Mediterranean Sea.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="flex items-center bg-blue-50 border-blue-200">
              <Heart className="w-4 h-4 mr-2 text-blue-600" />
            </Button>
            <Button variant="outline" size="sm" className="flex items-center bg-blue-50 border-blue-200">
              <Share className="w-4 h-4 mr-2 text-blue-600" />
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 px-6">
              Reserve →
            </Button>
          </div>
        </div>

        {/* Image Gallery - Perfect Screenshot Layout */}
        <div className="space-y-1 ">
          {/* Top Section: Left Large + Right Two Images */}
          <div className="grid grid-cols-3 gap-1 h-80">
            {/* Left Large Image (2/3 width) */}
            <div className="col-span-2 relative">
              <Image
                src="/images/update-1.png"
                alt="Main Room"
                fill
                className="object-cover rounded-lg"
              />
              
            </div>

            {/* Right Two Images (1/3 width, split vertically) */}
            <div className="grid grid-rows-2 gap-1">
              <div className="relative cursor-pointer" >
                <Image
                  src="/images/banner-right-2.png"
                  alt="Right Image 1"
                  fill
                  className="object-cover rounded-lg hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="relative cursor-pointer" >
                <Image
                  src="/images/banner-right-3.png"
                  alt="Right Image 2"
                  fill
                  className="object-cover rounded-lg hover:opacity-80 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section: 6 Images in a Row */}
          <div className="grid grid-cols-6 gap-1 h-28">
            <div className="relative cursor-pointer" >
              <Image
                src="/images/bottom-1.png"
                alt="Bottom Image 1"
                fill
                className="object-cover rounded-lg hover:opacity-80 transition-opacity"
              />
            </div>
            <div className="relative cursor-pointer" >
              <Image
                src="/images/bottom-2.png"
                alt="Bottom Image 2"
                fill
                className="object-cover rounded-lg hover:opacity-80 transition-opacity"
              />
            </div>
            <div className="relative cursor-pointer" >
              <Image
                src="/images/bottom-3.png"
                alt="Bottom Image 3"
                fill
                className="object-cover rounded-lg hover:opacity-80 transition-opacity"
              />
            </div>
            <div className="relative cursor-pointer" >
              <Image
                src="/images/bottom-4.png"
                alt="Bottom Image 4"
                fill
                className="object-cover rounded-lg hover:opacity-80 transition-opacity"
              />
            </div>
            <div className="relative cursor-pointer" >
              <Image
                src="/images/bottom-5.png"
                alt="Bottom Image 5"
                fill
                className="object-cover rounded-lg hover:opacity-80 transition-opacity"
              />
            </div>
            <div className="relative cursor-pointer" >
              <Image
                src="/images/bottom-6.png"
                alt="Bottom Image 6"
                fill
                className="object-cover rounded-lg hover:opacity-80 transition-opacity"
              />
             
              
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          {/* Left Content */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="flex border-b mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <div className="ml-auto">
                <Button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                  💬 Message
                </Button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'Over View' && (
              <div className="space-y-8">
                {/* Property Types */}
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Property Type</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                        <span className="text-gray-600">Resorts</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Size</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                        <span className="text-gray-600">12000 sqft</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">Features</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Wifi className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">Wifi</span>
                    </div>
                    <div className="flex items-center">
                      <Coffee className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">Dining</span>
                    </div>
                    <div className="flex items-center">
                      <Waves className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">Swimming Pool</span>
                    </div>
                    <div className="flex items-center">
                      <Car className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">Air Conditioning</span>
                    </div>
                    <div className="flex items-center">
                      <Dumbbell className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">Gym</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Features' && (
              <div>
                <p className="text-gray-600">Detailed features coming soon...</p>
              </div>
            )}

            {activeTab === 'Reviews' && (
              <div>
                <p className="text-gray-600">Reviews coming soon...</p>
              </div>
            )}
          </div>

          {/* Right Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <p className="text-gray-600 text-sm mb-1">1 week, 2 adults, 1 child</p>
                  <p className="text-2xl font-bold text-gray-900">USD $6,112</p>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
                  Reserve
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}