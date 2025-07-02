import Header from '@/components/sections/Header';
import HotelHero from '@/components/sections/HotelHero';
import RoomListing from '@/components/sections/RoomListing';
import HotelInfo from '@/components/sections/HotelInfo';
import GuestReviews from '@/components/sections/GuestReviews';
import HotelPolicies from '@/components/sections/HotelPolicies';
import SimilarHotels from '@/components/sections/SimilarHotels';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF] max-w-[1285px] mx-auto">
      <Header />
      
      <main className=' w-[86.26%] mx-auto'>
        {/* Hotel Hero Section */}
        <HotelHero 
        />
        
        {/* Room Availability */}
        <RoomListing  />
        
        {/* Hotel Information */}
        <HotelInfo  />

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
