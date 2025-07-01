'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Review {
  id: number;
  title: string;
  content: string;
  rating: number;
  author: string;
  location: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    title: "Breathtaking Views and Luxury Comfort!",
    content: "The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!",
    rating: 5,
    author: "Sofia B.",
    location: "France",
    date: "23.10.2024"
  },
  {
    id: 2,
    title: "Exceptional Stay with Excellent Amenities",
    content: "The Executive Suite provided an exceptional experience. The room was spotless equipped with everything you could need. The marble bathroom with its bathtub pure luxury. The location is perfect for exploring the city, and the staff truly make",
    rating: 5,
    author: "Youssef R.",
    location: "Morocco",
    date: "15.10.2024"
  },
  {
    id: 3,
    title: "Outstanding Service and Beautiful Location",
    content: "What an incredible stay! The Executive Suite was beyond our expectations. The staff was incredibly friendly and helpful throughout our visit. The room amenities were fantastic, and the view from our balcony was absolutely breathtaking. Would definitely recommend to anyone visiting the area.",
    rating: 5,
    author: "Maria L.",
    location: "Spain",
    date: "08.10.2024"
  },
  {
    id: 4,
    title: "Perfect for Business and Leisure",
    content: "I stayed here for a business trip and was thoroughly impressed. The Executive Suite had everything I needed for work, plus the luxury touches made it feel like a vacation. The Wi-Fi was excellent, the workspace was comfortable, and the bed was incredibly comfortable after long days.",
    rating: 5,
    author: "James K.",
    location: "USA",
    date: "02.10.2024"
  },
  {
    id: 5,
    title: "Amazing Experience with Top-notch Service",
    content: "From check-in to check-out, everything was flawless. The suite was elegantly furnished with attention to every detail. The concierge service was exceptional, helping us plan our entire stay. The rooftop terrace offered stunning sunset views. This hotel truly sets the standard for luxury hospitality.",
    rating: 5,
    author: "Ahmed S.",
    location: "UAE",
    date: "28.09.2024"
  },
  {
    id: 6,
    title: "Unforgettable Romantic Getaway",
    content: "My partner and I had the most romantic stay here. The suite was beautifully decorated with rose petals and champagne upon arrival. The private balcony with sea views was perfect for intimate dinners. The spa services were divine. Every moment felt like a fairytale.",
    rating: 5,
    author: "Isabella M.",
    location: "Italy",
    date: "20.09.2024"
  },
  {
    id: 7,
    title: "Exceptional Hospitality and Comfort",
    content: "The staff went above and beyond to make our stay memorable. The suite was spacious with modern amenities and classic elegance. The restaurant served exquisite cuisine with local flavors. The location was perfect for exploring the city's attractions. Highly recommended for luxury travelers.",
    rating: 4,
    author: "David W.",
    location: "UK",
    date: "12.09.2024"
  },
  {
    id: 8,
    title: "Luxurious Stay with Impeccable Standards",
    content: "This hotel exceeded every expectation. The Executive Suite was a masterpiece of design and comfort. The marble bathroom with its premium amenities felt like a personal spa. The 24/7 room service was prompt and professional. The attention to detail in every aspect was remarkable.",
    rating: 5,
    author: "Catherine L.",
    location: "Canada",
    date: "05.09.2024"
  }
];

export default function GuestReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const reviewsPerPage = 2;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const handleSeeAll = () => {
    setShowAll(!showAll);
  };

  // Check if can go to next/previous
  const canGoNext = currentIndex < totalPages - 1;
  const canGoPrev = currentIndex > 0;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="w-full mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">What Our Guests Say</h2>
      </div>

      {/* Navigation Arrows and See All - Same Level */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          {!showAll && (
            <>
              <button
                onClick={prevSlide}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  canGoPrev 
                    ? 'bg-blue-100 hover:bg-blue-200' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <ChevronLeft className={`w-5 h-5 ${
                  canGoPrev ? 'text-blue-600' : 'text-gray-600'
                }`} />
              </button>
              <button
                onClick={nextSlide}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  canGoNext 
                    ? 'bg-blue-100 hover:bg-blue-200' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <ChevronRight className={`w-5 h-5 ${
                  canGoNext ? 'text-blue-600' : 'text-gray-600'
                }`} />
              </button>
            </>
          )}
        </div>
        
        {/* See All Link */}
        <button 
          onClick={handleSeeAll}
          className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1"
        >
          {showAll ? "Show Less" : "See All.."}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Reviews Display */}
      {showAll ? (
        // Show All Reviews
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6 border border-gray-200 rounded-lg">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  &quot;{review.title}&quot;
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  &quot;{review.content}&quot;
                </p>
                <div className="flex items-center mb-4">
                  {renderStars(review.rating)}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-900">
                    — {review.author}, {review.location}
                  </div>
                  <div className="text-xs text-gray-500">
                    {review.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        // Slider View
        <>
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalPages }, (_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {reviews
                      .slice(pageIndex * reviewsPerPage, (pageIndex + 1) * reviewsPerPage)
                      .map((review) => (
                        <Card key={review.id} className="p-6 border border-gray-200 rounded-lg">
                          <CardContent className="p-0">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                              &quot;{review.title}&quot;
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              &quot;{review.content}&quot;
                            </p>
                            <div className="flex items-center mb-4">
                              {renderStars(review.rating)}
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium text-gray-900">
                                — {review.author}, {review.location}
                              </div>
                              <div className="text-xs text-gray-500">
                                {review.date}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}