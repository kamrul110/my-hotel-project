'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className=" ">
      <div className="w-full  mx-auto  
      items-center border-2 border-red-500 bg-[#E9F6FF] rounded-t-4xl h-[76px] ">

        {/* Main header */}
        <div className="flex  items-center justify-between py-4 w-[86.26%] mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="86" height="26" viewBox="0 0 86 26" fill="none">
                <path d="M44.4735 5.56116C44.1152 4.66057 43.6084 3.89327 42.9536 3.26C42.2981 2.62672 41.4976 2.1339 40.553 1.78295C39.6077 1.43201 38.5478 1.25582 37.3745 1.25582H30.1266V15.8647H37.3745C38.5478 15.8647 39.6077 15.6932 40.553 15.3501C41.4976 15.0063 42.2981 14.5181 42.9536 13.8842C43.6084 13.2509 44.1155 12.4843 44.4735 11.583C44.8318 10.6831 45.0116 9.67566 45.0116 8.56028C45.0116 7.4449 44.8318 6.46175 44.4735 5.56116ZM41.5815 10.6438C41.3524 11.2249 41.0326 11.7091 40.6215 12.098C40.2097 12.4872 39.7215 12.7734 39.1577 12.9564C38.5939 13.1397 37.9765 13.2316 37.306 13.2316H33.1899V3.88863H37.306C37.9765 3.88863 38.5939 3.9844 39.1577 4.17489C39.7215 4.36608 40.2097 4.65199 40.6215 5.03331C41.0326 5.41535 41.3527 5.90031 41.5815 6.48748C41.8106 7.07537 41.9241 7.76654 41.9241 8.55957C41.9241 9.35259 41.8102 10.0638 41.5815 10.6431V10.6438Z" fill="#00006A" />
                <path d="M54.7285 1.25582H50.8413L45.3767 15.8647H48.5777L49.9038 12.2699H55.6892L56.9921 15.8647H60.2167L54.7285 1.25582ZM50.7042 9.9805L52.7847 4.30176L54.8652 9.9805H50.7039H50.7042Z" fill="#00006A" />
                <path d="M69.4083 1.25582L65.5896 7.85053L61.7258 1.25582H58.2497L63.9434 10.8507V15.8647H66.9842V10.8965L72.7924 1.25582H69.4083Z" fill="#00006A" />
                <path d="M85.4138 3.88934V1.25582H74.4383V15.8647H77.5023V9.63706H84.4075V7.18687H77.5023V3.88898H85.4135L85.4138 3.88934Z" fill="#00006A" />
              </svg>
            </div>
          </div>

          {/* Navigation */}
          <nav className="text-[16px] md:flex space-x-8  items-center">
            <Link href="/" className="text-[#007DD0] font-medium ">Home</Link>
            <Link href="/hotels" className="text-[#626262] hover:text-blue-600 font-medium">Hotels</Link>
            <Link href="/house" className="text-[#626262] hover:text-blue-600 font-medium">House</Link>
            <Link href="/about" className="text-[#626262] hover:text-blue-600 font-medium">About Us</Link>
            <Link href="/contact" className="text-[#626262] hover:text-blue-600 font-medium">Contact Us</Link>
          </nav>

          {/* Right menu */}
          <div className="flex items-center space-x-3">
            {/* Currency selector */}
            <div className="flex items-center space-x-4 text-sm border border-gray-200  px-4 py-2 hover:bg-gray-50 cursor-pointer rounded-[20px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                <path d="M21.5 11C21.5 16.5228 17.0228 21 11.5 21C5.97715 21 1.5 16.5228 1.5 11C1.5 5.47715 5.97715 1 11.5 1C17.0228 1 21.5 5.47715 21.5 11Z" stroke="#535353" strokeWidth="1.5" />
                <path d="M14.5 13.4923C14.0216 14.3957 13.1512 15 12.1568 15C10.647 15 9.42308 13.6071 9.42308 11.8889V10.1111C9.42308 8.39289 10.647 7 12.1568 7C13.1512 7 14.0216 7.60426 14.5 8.50774M8.5 11H12.4231" stroke="#535353" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M20.2437 8.77379C20.3384 8.67906 20.5014 8.67907 20.5962 8.77379C20.6909 8.86853 20.6909 9.03159 20.5962 9.12633L14.0767 15.6468C13.6438 16.0797 13.0723 16.3 12.5005 16.3002C11.9285 16.3002 11.3564 16.0798 10.9233 15.6468L4.40381 9.12633C4.30907 9.03159 4.30907 8.86853 4.40381 8.77379C4.49855 8.67905 4.66161 8.67905 4.75635 8.77379L11.2769 15.2933C11.9521 15.9685 13.0479 15.9685 13.7231 15.2933L20.2437 8.77379Z" fill="#292D32" stroke="#007DD0" />
              </svg>
            </div>

            {/* Language selector */}
            <div className="flex items-center text-sm border border-gray-200 rounded-full px-4 py-2 hover:bg-gray-50 cursor-pointer space-x-4">
              <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/4715b6e495bb57fa634de4629ea3eb801d82ce6c.png"
                  alt="Spain Flag"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M20.2437 8.77379C20.3384 8.67906 20.5014 8.67907 20.5962 8.77379C20.6909 8.86853 20.6909 9.03159 20.5962 9.12633L14.0767 15.6468C13.6438 16.0797 13.0723 16.3 12.5005 16.3002C11.9285 16.3002 11.3564 16.0798 10.9233 15.6468L4.40381 9.12633C4.30907 9.03159 4.30907 8.86853 4.40381 8.77379C4.49855 8.67905 4.66161 8.67905 4.75635 8.77379L11.2769 15.2933C11.9521 15.9685 13.0479 15.9685 13.7231 15.2933L20.2437 8.77379Z" fill="#292D32" stroke="#007DD0" />
              </svg>
            </div>

            {/* List property button */}
            <button className="flex items-center space-x-2 px-4 py-2 rounded-full border-2 border-[#A5D3F1] text-[#007DD0]">
              List your property
              <span className="ml-2">↗</span>
            </button>

            {/* Notification/Message icon */}
            <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
              <div className="w-5 h-5 text-gray-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
            </div>

            {/* User menu */}
            <div className="flex items-center space-x-2 text-[#007DD0] hover:bg-gray-50 rounded-full px-3 py-2 cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm font-medium">Sunan</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
