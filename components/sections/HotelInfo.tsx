'use client';

import { Star, MapPin, Wifi, Car, Coffee, Dumbbell, Waves, Utensils } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Hotel, Review } from '@/types/hotel';

interface HotelInfoProps {
  hotel: Hotel;
  reviews: Review[];
}

const amenityIcons: { [key: string]: React.ReactNode } = {
  'Free WiFi': <Wifi className="w-5 h-5 text-blue-500" />,
  'Valet Parking': <Car className="w-5 h-5 text-blue-500" />,
  'Coffee Machine': <Coffee className="w-5 h-5 text-blue-500" />,
  'Fitness Center': <Dumbbell className="w-5 h-5 text-blue-500" />,
  'Swimming Pool': <Waves className="w-5 h-5 text-blue-500" />,
  'Restaurant': <Utensils className="w-5 h-5 text-blue-500" />,
};

export default function HotelInfo({ hotel, reviews }: HotelInfoProps) {
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  
  const getRatingText = (rating: number) => {
    if (rating >= 4.5) return 'Excellent';
    if (rating >= 4.0) return 'Very Good';
    if (rating >= 3.5) return 'Good';
    if (rating >= 3.0) return 'Fair';
    return 'Poor';
  };

  return (
    <div className="w-full  mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>About this property</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">{hotel.description}</p>
            </CardContent>
          </Card>

          {/* Amenities */}
          <Card>
            <CardHeader>
              <CardTitle>Most popular facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    {amenityIcons[amenity] || <span className="w-5 h-5 text-blue-500">•</span>}
                    <span className="text-sm text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                {hotel.location.address}, {hotel.location.city}, {hotel.location.country}
              </p>
              <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Map placeholder</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Rating Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Guest reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-600 text-white px-3 py-2 rounded-lg">
                  <span className="font-bold text-lg">{averageRating.toFixed(1)}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{getRatingText(averageRating)}</p>
                  <p className="text-sm text-gray-600">{hotel.reviewCount.toLocaleString()} reviews</p>
                </div>
              </div>
              
              {/* Recent Reviews */}
              <div className="space-y-4">
                {reviews.slice(0, 3).map((review) => (
                  <div key={review.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-medium text-sm">
                            {review.userName.charAt(0)}
                          </span>
                        </div>
                        <span className="font-medium text-sm">{review.userName}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Property highlights */}
          <Card>
            <CardHeader>
              <CardTitle>Property highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">Perfect for a 2-night stay!</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">Top location: Highly rated by recent guests</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">Great breakfast</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">Free WiFi</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Nearby attractions */}
          <Card>
            <CardHeader>
              <CardTitle>What&apos;s nearby</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">City Center</span>
                  <span className="text-gray-500">0.5 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Beach</span>
                  <span className="text-gray-500">1.2 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Airport</span>
                  <span className="text-gray-500">25 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Train Station</span>
                  <span className="text-gray-500">3 km</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
