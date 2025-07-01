import Header from '@/components/sections/Header';
import HotelHero from '@/components/sections/HotelHero';
import RoomListing from '@/components/sections/RoomListing';
import HotelInfo from '@/components/sections/HotelInfo';
import GuestReviews from '@/components/sections/GuestReviews';
import HotelPolicies from '@/components/sections/HotelPolicies';
import SimilarHotels from '@/components/sections/SimilarHotels';
import Footer from '@/components/sections/Footer';
import { hotelData, roomsData, reviewsData } from '@/data/hotelData';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF] max-w-[1285px] mx-auto">
      <Header />
      
      <main className=' w-[86.26%] mx-auto'>
        {/* Hotel Hero Section */}
        <HotelHero 
          name={hotelData.name}
          images={hotelData.images}
          rating={hotelData.rating}
          reviewCount={hotelData.reviewCount}
          location={hotelData.location}
        />
        
        {/* Room Availability */}
        <RoomListing rooms={roomsData} />
        
        {/* Hotel Information */}
        <HotelInfo hotel={hotelData} reviews={reviewsData} />

        {/* Guest Reviews */}
        <GuestReviews />

        {/* Hotel Policies */}
        <HotelPolicies />

        {/* Similar Hotels */}
        <SimilarHotels />
      </main>
      
      <Footer/>
    </div>
  );
}
