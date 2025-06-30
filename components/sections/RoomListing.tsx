'use client';

import Image from 'next/image';
import { Users, Bed, Maximize, Wifi, Coffee, Tv, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Room } from '@/types/hotel';

interface RoomListingProps {
  rooms: Room[];
}

const amenityIcons: { [key: string]: React.ReactNode } = {
  'Free WiFi': <Wifi className="w-4 h-4" />,
  'Coffee Machine': <Coffee className="w-4 h-4" />,
  'Mini Bar': <Tv className="w-4 h-4" />,
  'Valet Parking': <Car className="w-4 h-4" />,
};

export default function RoomListing({ rooms }: RoomListingProps) {
  return (
    <div className="w-full  mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Availability</h2>
        <p className="text-gray-600">Choose your room</p>
      </div>
      
      <div className="space-y-6">
        {rooms.map((room) => (
          <Card key={room.id} className="overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Room Images */}
              <div className="lg:w-1/3">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={room.images[0] || '/images/room-placeholder.jpg'}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                  {room.originalPrice && room.originalPrice > room.price && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-500 hover:bg-red-600">
                        -{Math.round(((room.originalPrice - room.price) / room.originalPrice) * 100)}%
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Room Details */}
              <div className="lg:w-2/3 flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">{room.name}</CardTitle>
                      <p className="text-gray-600 mt-1">{room.description}</p>
                    </div>
                    <div className="text-right">
                      {room.originalPrice && room.originalPrice > room.price && (
                        <p className="text-sm text-gray-500 line-through">${room.originalPrice}</p>
                      )}
                      <p className="text-2xl font-bold text-gray-900">${room.price}</p>
                      <p className="text-sm text-gray-600">per night</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1">
                  {/* Room specs */}
                  <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>Up to {room.maxGuests} guests</span>
                    </div>
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{room.bedType}</span>
                    </div>
                    <div className="flex items-center">
                      <Maximize className="w-4 h-4 mr-1" />
                      <span>{room.size} m²</span>
                    </div>
                  </div>
                  
                  {/* Amenities */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Room amenities</p>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          {amenityIcons[amenity] || <span className="w-4 h-4 mr-1">•</span>}
                          <span className="ml-1">{amenity}</span>
                          {index < room.amenities.length - 1 && (
                            <span className="ml-3 text-gray-300">|</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Booking actions */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-gray-600">
                      {room.available ? (
                        <span className="text-green-600 font-medium">✓ Available</span>
                      ) : (
                        <span className="text-red-600 font-medium">✗ Not available</span>
                      )}
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700"
                        disabled={!room.available}
                      >
                        Reserve Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
