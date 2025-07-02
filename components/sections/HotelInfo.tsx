'use client';


export default function HotelInfo() {
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
                    <div className="w-6 h-6 mr-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
  <path d="M1.08334 11.6982L16.9167 11.6982" stroke="#7D7D7D" strokeLinecap="round"/>
  <path d="M9 3.78166C9 3.78166 10.1875 2.96338 10.1875 1.95398C10.1875 0.168661 7.8125 0.168661 7.8125 1.95398C7.8125 2.96338 9 3.78166 9 3.78166Z" stroke="#7D7D7D" stroke-linejoin="round"/>
  <path d="M1.875 11.6982L2.36684 13.6656C2.54305 14.3704 3.17636 14.8649 3.9029 14.8649H14.0971C14.8236 14.8649 15.457 14.3704 15.6332 13.6656L16.125 11.6982" stroke="#7D7D7D" strokeLinecap="round"/>
  <path d="M15.7292 9.71912C15.3346 6.37577 12.4724 3.78162 9 3.78162C5.52764 3.78162 2.66536 6.37577 2.27084 9.71912" stroke="#7D7D7D" strokeLinecap="round"/>
</svg>
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
                    <div className="w-6 h-6 mr-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M0.5 14.4901C0.5 14.4901 2.29534 13.74 5.5 13.74C10.5 13.74 14.5 16.74 20.5 16.74" stroke="#7D7D7D" strokeLinecap="round" stroke-linejoin="round"/>
  <path d="M0.5 19.74H20.5" stroke="#7D7D7D" strokeLinecap="round" stroke-linejoin="round"/>
  <path d="M11.094 1.9676C8.24838 2.78367 6.39871 5.59223 6.5043 8.61503C6.52623 9.24286 6.53719 9.55677 6.80546 9.6956C7.07373 9.83443 7.35218 9.63767 7.90908 9.24414L9.15065 8.36679C9.33711 8.23502 9.55848 8.17154 9.78153 8.18586L12.6977 8.3732L15.1357 6.65041C15.3222 6.51864 15.5435 6.45516 15.7666 6.46949L17.2879 6.56722C17.9407 6.60915 18.2671 6.63012 18.4291 6.37882C18.5912 6.12752 18.4594 5.85582 18.1959 5.31241C16.8856 2.60988 13.9553 1.14706 11.094 1.9676Z" stroke="#7D7D7D" strokeLinecap="round" stroke-linejoin="round"/>
  <path d="M13 8.23999L15 15.74M10.7857 1.73999L10.5 0.73999" stroke="#7D7D7D" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
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
                    <div className="w-6 h-6 mr-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M15 21.74V16.74C15 16.1877 14.5523 15.74 14 15.74H11C10.4477 15.74 10 16.1877 10 16.74V21.74" stroke="#7D7D7D" strokeLinecap="round" stroke-linejoin="round"/>
  <path d="M5.5 11.74V17.74C5.5 19.6256 5.5 20.5684 6.08579 21.1542C6.67157 21.74 7.61438 21.74 9.5 21.74H15.5C17.3856 21.74 18.3284 21.74 18.9142 21.1542C19.5 20.5684 19.5 19.6256 19.5 17.74V11.74" stroke="#7D7D7D"/>
  <path d="M5.12127 5.25492C5.30316 4.52736 5.3941 4.16358 5.66536 3.95178C5.93663 3.73999 6.3116 3.73999 7.06155 3.73999H17.9384C18.6884 3.73999 19.0634 3.73999 19.3346 3.95178C19.6059 4.16358 19.6968 4.52736 19.8787 5.25492L21.0823 10.0694C21.1792 10.4567 21.2276 10.6504 21.2169 10.8077C21.1892 11.2157 20.916 11.5657 20.5269 11.6915C20.3769 11.74 20.1726 11.74 19.7641 11.74V11.74C19.2309 11.74 18.9644 11.74 18.7405 11.6878C18.1133 11.5417 17.5948 11.1025 17.3475 10.5078C17.2593 10.2955 17.2164 10.0385 17.1308 9.52456V9.52456C17.1068 9.38075 17.0948 9.30885 17.0812 9.28993C17.0413 9.23438 16.9587 9.23438 16.9188 9.28993C16.9052 9.30885 16.8932 9.38075 16.8692 9.52456L16.7877 10.0138C16.7791 10.0657 16.7747 10.0916 16.7704 10.1143C16.5939 11.0405 15.7946 11.7177 14.852 11.7395C14.8289 11.74 14.8026 11.74 14.75 11.74V11.74C14.6974 11.74 14.6711 11.74 14.648 11.7395C13.7054 11.7177 12.9061 11.0405 12.7296 10.1143C12.7253 10.0916 12.7209 10.0657 12.7123 10.0138L12.6308 9.52456C12.6068 9.38075 12.5948 9.30885 12.5812 9.28993C12.5413 9.23438 12.4587 9.23438 12.4188 9.28993C12.4052 9.30885 12.3932 9.38075 12.3692 9.52456L12.2877 10.0138C12.2791 10.0657 12.2747 10.0916 12.2704 10.1143C12.0939 11.0405 11.2946 11.7177 10.352 11.7395C10.3289 11.74 10.3026 11.74 10.25 11.74V11.74C10.1974 11.74 10.1711 11.74 10.148 11.7395C9.20541 11.7177 8.40606 11.0405 8.2296 10.1143C8.22527 10.0916 8.22095 10.0657 8.2123 10.0138L8.13076 9.52456C8.10679 9.38075 8.09481 9.30885 8.08122 9.28993C8.04132 9.23438 7.95868 9.23438 7.91878 9.28993C7.90519 9.30885 7.89321 9.38075 7.86924 9.52456V9.52456C7.78357 10.0385 7.74074 10.2955 7.65249 10.5078C7.40524 11.1025 6.88675 11.5417 6.25951 11.6878C6.03563 11.74 5.76905 11.74 5.23591 11.74V11.74C4.82737 11.74 4.62309 11.74 4.47306 11.6915C4.08403 11.5657 3.81078 11.2157 3.78307 10.8077C3.77239 10.6504 3.82081 10.4567 3.91765 10.0694L5.12127 5.25492Z" stroke="#7D7D7D"/>
</svg>
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
                    <div className="w-6 h-6 mr-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M12.9583 15.4691V16.6566" stroke="#7D7D7D" strokeLinecap="round" stroke-linejoin="round"/>
  <path d="M5.04166 15.4691V16.6566" stroke="#7D7D7D" strokeLinecap="round" stroke-linejoin="round"/>
  <path d="M2.66666 4.609C2.66666 4.10285 2.66666 3.84977 2.8043 3.54159C2.94194 3.23342 3.08171 3.10817 3.36124 2.85766C4.2772 2.03681 6.11855 0.823364 8.99999 0.823364C11.8814 0.823364 13.7228 2.03681 14.6387 2.85766C14.9183 3.10817 15.058 3.23342 15.1957 3.54159C15.3333 3.84977 15.3333 4.10285 15.3333 4.609V10.3234C15.3333 12.5625 15.3333 13.6821 14.6377 14.3777C13.9421 15.0734 12.8225 15.0734 10.5833 15.0734H7.41666C5.17748 15.0734 4.0579 15.0734 3.36228 14.3777C2.66666 13.6821 2.66666 12.5625 2.66666 10.3234V4.609Z" stroke="#7D7D7D" stroke-linejoin="round"/>
  <path d="M2.66666 10.3234C2.66666 10.3234 5.62221 11.115 8.99999 11.115C12.3778 11.115 15.3333 10.3234 15.3333 10.3234" stroke="#7D7D7D" strokeLinecap="round" stroke-linejoin="round"/>
  <path d="M3.0625 13.0941H4.25" stroke="#7D7D7D" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
  <path d="M13.75 13.0941H14.9375" stroke="#7D7D7D" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
  <path d="M8.20834 13.0941L9.79168 13.0941" stroke="#7D7D7D" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
  <path d="M2.66666 3.98999L15.3333 3.98999" stroke="#7D7D7D" stroke-linejoin="round"/>
  <path d="M1.08334 6.36499L1.08334 7.15666" stroke="#7D7D7D" strokeLinecap="round" stroke-linejoin="round"/>
  <path d="M16.9167 6.36499L16.9167 7.15666" stroke="#7D7D7D" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
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
