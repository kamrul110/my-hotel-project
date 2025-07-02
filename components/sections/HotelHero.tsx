'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';



export default function HotelHero() {
  const [activeTab, setActiveTab] = useState('Over View');
  const tabs = ['Over View', 'Features', 'Reviews'];

  return (
    <div className="bg-white">
      <div className="w-full mx-auto py-4 px-4 md:py-6">
        {/* Hotel Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 space-y-4 md:space-y-0">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-medium text-[#252525] mb-2">El Aurassi Hotel</h1>
            <p className="text-gray-600 mb-3 text-sm md:text-base">
              Spacious rules, modern rooms with panoramic views of the <br /> Mediterranean Sea.
            </p>
          </div>

          {/* Action buttons */}
          {/*  */}
          <div className="flex items-center space-x-2 md:space-x-3 ">
            <div className="p-2 md:p-[10px] rounded-full bg-[#E9F6FF] ">
              {/* svg-1 */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-10 md:h-9" viewBox="0 0 41 44" fill="none">
                <path d="M7.16663 16.5455C7.16663 11.4029 7.16663 8.83158 8.63109 7.23398C10.0956 5.63638 12.4526 5.63638 17.1666 5.63638H23.8333C28.5473 5.63638 30.9044 5.63638 32.3688 7.23398C33.8333 8.83158 33.8333 11.4029 33.8333 16.5455V28.9593C33.8333 33.838 33.8333 36.2774 32.4261 37.0235C31.019 37.7696 29.2607 36.2625 25.7442 33.2483L24.6188 32.2837C22.6415 30.5889 21.6528 29.7414 20.5 29.7414C19.3471 29.7414 18.3584 30.5889 16.3811 32.2837L15.2557 33.2483C11.7392 36.2625 9.98094 37.7696 8.57378 37.0235C7.16663 36.2774 7.16663 33.838 7.16663 28.9593V16.5455Z" stroke="#007DD0" strokeWidth="2" />
              </svg>

            </div>
            <div className="p-2 md:p-[11px] rounded-full bg-[#E9F6FF]">
              {/* svg-2 */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-10 md:h-9" viewBox="0 0 43 39" fill="none">
                <path d="M15.2992 7.49934C15.2992 8.28728 15.4596 9.06749 15.7712 9.79544C16.0828 10.5234 16.5396 11.1848 17.1154 11.742C17.6912 12.2991 18.3747 12.7411 19.127 13.0426C19.8793 13.3441 20.6857 13.4993 21.5 13.4993C22.3143 13.4993 23.1206 13.3441 23.8729 13.0426C24.6252 12.7411 25.3088 12.2991 25.8846 11.742C26.4604 11.1848 26.9171 10.5234 27.2287 9.79544C27.5404 9.06749 27.7007 8.28727 27.7007 7.49934C27.7007 6.71141 27.5404 5.93119 27.2287 5.20324C26.9171 4.47529 26.4604 3.81385 25.8846 3.2567C25.3088 2.69955 24.6252 2.25759 23.8729 1.95607C23.1206 1.65454 22.3143 1.49934 21.5 1.49934C20.6857 1.49934 19.8793 1.65454 19.127 1.95607C18.3747 2.2576 17.6912 2.69955 17.1154 3.25671C16.5396 3.81386 16.0828 4.47529 15.7712 5.20325C15.4596 5.9312 15.2992 6.71142 15.2992 7.49935L15.2992 7.49934Z" stroke="#007DD0" strokeWidth="2" />
                <path d="M5.87005 23.3024C5.16485 23.6963 4.54675 24.2208 4.05103 24.8459C3.55532 25.471 3.19171 26.1845 2.98095 26.9456C2.77019 27.7067 2.71642 28.5005 2.82271 29.2817C2.929 30.0629 3.19326 30.8161 3.60041 31.4985C4.00756 32.1809 4.54962 32.779 5.19565 33.2586C5.84167 33.7383 6.57901 34.0901 7.36556 34.2941C8.15211 34.498 8.97247 34.55 9.7798 34.4472C10.5871 34.3443 11.3656 34.0886 12.0708 33.6947C12.776 33.3007 13.3941 32.7762 13.8898 32.1511C14.3856 31.526 14.7492 30.8125 14.9599 30.0514C15.1707 29.2903 15.2245 28.4965 15.1182 27.7153C15.0119 26.9342 14.7476 26.1809 14.3405 25.4985C13.9333 24.8161 13.3913 24.218 12.7452 23.7384C12.0992 23.2587 11.3619 22.9069 10.5753 22.7029C9.78876 22.499 8.9684 22.447 8.16107 22.5498C7.35374 22.6527 6.57525 22.9084 5.87005 23.3024L5.87005 23.3024Z" stroke="#007DD0" strokeWidth="2" />
                <path d="M37.1299 23.3024C37.8352 23.6963 38.4533 24.2208 38.949 24.8459C39.4447 25.471 39.8083 26.1845 40.0191 26.9456C40.2298 27.7067 40.2836 28.5005 40.1773 29.2817C40.071 30.0629 39.8067 30.8161 39.3996 31.4985C38.9924 32.1809 38.4504 32.779 37.8044 33.2586C37.1583 33.7383 36.421 34.0901 35.6344 34.2941C34.8479 34.498 34.0275 34.55 33.2202 34.4472C32.4129 34.3443 31.6344 34.0886 30.9292 33.6947C30.224 33.3007 29.6059 32.7762 29.1102 32.1511C28.6144 31.526 28.2508 30.8125 28.0401 30.0514C27.8293 29.2903 27.7755 28.4965 27.8818 27.7153C27.9881 26.9342 28.2524 26.1809 28.6595 25.4985C29.0667 24.8161 29.6087 24.218 30.2548 23.7384C30.9008 23.2587 31.6381 22.9069 32.4247 22.7029C33.2112 22.499 34.0316 22.447 34.8389 22.5498C35.6463 22.6527 36.4248 22.9084 37.13 23.3024L37.1299 23.3024Z" stroke="#007DD0" strokeWidth="2" />
                <path d="M30.9294 33.6955C31.5458 34.0399 32.2181 34.2782 32.9167 34.4016C31.5088 35.5725 29.9175 36.5217 28.2 37.2102C26.0752 38.0617 23.7987 38.5001 21.5007 38.5002C19.2025 38.5002 16.9255 38.0618 14.8005 37.2102L14.4041 37.0461C12.8373 36.374 11.3819 35.4823 10.0828 34.4016C10.7812 34.2782 11.4539 34.0398 12.0701 33.6955C12.1409 33.6559 12.21 33.6137 12.2791 33.5715C13.1841 34.2162 14.161 34.7655 15.1931 35.2082L15.5447 35.3537C17.4319 36.1101 19.4562 36.5002 21.5007 36.5002C23.545 36.5001 25.5688 36.11 27.4558 35.3537C28.6175 34.8881 29.7124 34.2882 30.7195 33.5715C30.7887 33.6138 30.8584 33.6558 30.9294 33.6955ZM15.6638 5.46994C15.422 6.12047 15.2986 6.80747 15.2986 7.50021C15.2986 7.58189 15.301 7.66387 15.3044 7.74533L15.1931 7.79221C13.4447 8.54221 11.8547 9.59828 10.5037 10.9055L10.2371 11.1692C8.92141 12.5064 7.87278 14.0669 7.14331 15.7707L7.00171 16.1135C6.3625 17.7173 6.01319 19.4152 5.96948 21.132L5.9646 21.5002C5.9646 22.0689 5.99765 22.6365 6.06421 23.1994C5.99857 23.2331 5.93335 23.2679 5.8689 23.3039C5.25959 23.6443 4.71504 24.0819 4.25854 24.5979C4.09005 23.7156 3.99335 22.8197 3.97046 21.9192L3.9646 21.5002C3.96465 19.403 4.36494 17.3251 5.14331 15.3723L5.30444 14.9836C6.13313 13.048 7.32299 11.2796 8.81128 9.76682L9.11304 9.46799C10.6407 7.98991 12.4351 6.79904 14.4041 5.95432L14.8005 5.79025C15.0857 5.67599 15.3736 5.56927 15.6638 5.46994ZM27.3328 5.46896C27.4892 5.52245 27.6456 5.57714 27.8005 5.63498L28.2 5.79025C30.1921 6.58873 32.0159 7.73637 33.5789 9.17599L33.8884 9.46799C35.4162 10.9464 36.6496 12.6859 37.5261 14.5988L37.696 14.9836C38.5799 17.0484 39.0358 19.2632 39.0359 21.5002C39.0359 22.5419 38.9349 23.5788 38.74 24.5979C38.2835 24.0819 37.739 23.6443 37.1296 23.3039C37.065 23.2678 36.9992 23.2342 36.9333 23.2004C36.9999 22.6371 37.0359 22.0693 37.0359 21.5002C37.0358 19.5352 36.6361 17.5881 35.8582 15.7707L35.7078 15.4319C34.9361 13.7477 33.8486 12.2126 32.4978 10.9055L32.2244 10.6467C30.9043 9.4307 29.3701 8.44892 27.6941 7.74533C27.6975 7.66387 27.7 7.58189 27.7 7.50021C27.6999 6.80692 27.5749 6.11995 27.3328 5.46896Z" fill="#007DD0" />
              </svg>





            </div>
            <button className="bg-[#007DD0] px-4 md:px-6 py-2 text-sm md:text-base rounded-full text-white flex justify-center items-center md:flex-row  space-y-1 md:space-y-0 md:space-x-2">
        <div className='flex items-center space-x-1'>
           
              <div><span className="text-xs md:text-sm">Reserve</span></div>
              <div>     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M20.5 12L21.0303 11.4697L21.5607 12L21.0303 12.5303L20.5 12ZM5.5 12.75C5.08579 12.75 4.75 12.4142 4.75 12C4.75 11.5858 5.08579 11.25 5.5 11.25V12.75ZM14.5 6L15.0303 5.46967L21.0303 11.4697L20.5 12L19.9697 12.5303L13.9697 6.53033L14.5 6ZM20.5 12L21.0303 12.5303L15.0303 18.5303L14.5 18L13.9697 17.4697L19.9697 11.4697L20.5 12ZM20.5 12V12.75H5.5V12V11.25H20.5V12Z" fill="white"/>
</svg></div>
        </div>
            </button>
          </div>
        </div>

        {/* Image Gallery - Responsive Layout */}
        <div className="space-y-1 mb-6  rounded-md overflow-hidden">
          {/* Mobile: Single column stack */}
          <div className="md:hidden space-y-1">
            <div className="relative h-48">
              <Image
                src="/images/update-1.png"
                alt="Main Room"
                fill
                className="object-cover "
              />
            </div>
            <div className="grid grid-cols-2 gap-1 h-24">
              <div className="relative">
                <Image
                  src="/images/banner-right-2.png"
                  alt="Room 2"
                  fill
                  className="object-cover "
                />
              </div>
              <div className="relative">
                <Image
                  src="/images/banner-right-3.png"
                  alt="Room 3"
                  fill
                  className="object-cover "
                />
              </div>
            </div>
          </div>

          {/* Desktop: Original layout */}
          <div className="hidden md:block ">
            {/* Top Section: Left Large + Right Two Images */}
            <div className="grid grid-cols-3 gap-1 h-60 lg:h-80">
              {/* Left Large Image (2/3 width) */}
              <div className="col-span-2 relative">
                <Image
                  src="/images/update-1.png"
                  alt="Main Room"
                  fill
                  className="object-cover "
                />
              </div>

              {/* Right Two Images (1/3 width, split vertically) */}
              <div className="grid grid-rows-2 gap-1">
                <div className="relative cursor-pointer">
                  <Image
                    src="/images/banner-right-2.png"
                    alt="Right Image 1"
                    fill
                    className="object-cover  hover:opacity-80 transition-opacity"
                  />
                </div>
                <div className="relative cursor-pointer">
                  <Image
                    src="/images/banner-right-3.png"
                    alt="Right Image 2"
                    fill
                    className="object-cover hover:opacity-80 transition-opacity"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Section: 6 Images in a Row */}
            <div className="grid grid-cols-6 gap-1 h-20 lg:h-28 mt-1 ">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="relative cursor-pointer">
                  <Image
                    src={`/images/bottom-${num}.png`}
                    alt={`Bottom Image ${num}`}
                    fill
                    className="object-cover  hover:opacity-80 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="flex-1 lg:w-2/3">
            {/* Tabs */}
           {/* Tabs */}
<div className="mb-6 ">
  {/* Tabs row */}
  <div className="flex items-center  overflow-x-auto mb-4 md:mb-0 ">
    <div className="flex space-x-4 min-w-max">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 text-sm md:text-base font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === tab
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
    
    {/* Desktop Message Button - same line as tabs */}
    <button className="hidden md:flex bg-[#007DD0] text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm ml-4 items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-6 md:h-5" viewBox="0 0 23 22" fill="none">
        <path d="M21.4598 9.97072C21.5134 10.8009 21.5134 11.6607 21.4598 12.4909C21.1856 16.7332 17.8536 20.1125 13.6706 20.3905C12.2435 20.4854 10.7536 20.4852 9.3294 20.3905C8.83896 20.3579 8.3044 20.2409 7.84401 20.0513C7.33177 19.8403 7.0756 19.7348 6.94544 19.7508C6.81527 19.7668 6.6264 19.9061 6.24868 20.1846C5.58268 20.6757 4.74367 21.0285 3.49943 20.9982C2.87026 20.9829 2.55568 20.9752 2.41484 20.7351C2.27401 20.495 2.44941 20.1626 2.80021 19.4978C3.28674 18.5758 3.59501 17.5203 3.12791 16.6746C2.32343 15.4666 1.6401 14.036 1.54024 12.4909C1.48659 11.6607 1.48659 10.8009 1.54024 9.97072C1.81441 5.72838 5.14639 2.34913 9.3294 2.07107C10.5318 1.99114 10.7812 1.97856 12 2.03368" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.5 4.5C21.5 6.433 19.933 8 18 8C16.067 8 14.5 6.433 14.5 4.5C14.5 2.567 16.067 1 18 1C19.933 1 21.5 2.567 21.5 4.5Z" stroke="white" strokeWidth="1.5" />
      </svg>
      <span>Message</span>
    </button>
  </div>
  
  {/* Mobile Message Button - separate line below tabs */}
  <button className="md:hidden bg-[#007DD0] text-white px-4 py-2 rounded-full text-sm flex items-center space-x-2 w-full justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 23 22" fill="none">
      <path d="M21.4598 9.97072C21.5134 10.8009 21.5134 11.6607 21.4598 12.4909C21.1856 16.7332 17.8536 20.1125 13.6706 20.3905C12.2435 20.4854 10.7536 20.4852 9.3294 20.3905C8.83896 20.3579 8.3044 20.2409 7.84401 20.0513C7.33177 19.8403 7.0756 19.7348 6.94544 19.7508C6.81527 19.7668 6.6264 19.9061 6.24868 20.1846C5.58268 20.6757 4.74367 21.0285 3.49943 20.9982C2.87026 20.9829 2.55568 20.9752 2.41484 20.7351C2.27401 20.495 2.44941 20.1626 2.80021 19.4978C3.28674 18.5758 3.59501 17.5203 3.12791 16.6746C2.32343 15.4666 1.6401 14.036 1.54024 12.4909C1.48659 11.6607 1.48659 10.8009 1.54024 9.97072C1.81441 5.72838 5.14639 2.34913 9.3294 2.07107C10.5318 1.99114 10.7812 1.97856 12 2.03368" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.5 4.5C21.5 6.433 19.933 8 18 8C16.067 8 14.5 6.433 14.5 4.5C14.5 2.567 16.067 1 18 1C19.933 1 21.5 2.567 21.5 4.5Z" stroke="white" strokeWidth="1.5" />
    </svg>
    <span>Message</span>
  </button>
</div>

            {/* Tab Content */}
            {activeTab === 'Over View' && (
              <div className="space-y-8">
                {/* Property Types */}
                <div className="flex space-x-[50px]">
                  <div>
                    <h3 className="font-semibold text-[#252525] mb-4">Property Type</h3>
                    <div className="space-y-2  ">
                      <div className="flex items-center space-x-2">

                        <div className='border-1 inline-block p-2 rounded-md'>
                          <Image
                            src="/images/house-2.svg"
                            alt="Spain Flag"
                            width={20}
                            height={20}
                            className="rounded-full"
                          />
                        </div>

                        <span className="text-gray-600">Resorts</span></div>

                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#252525] mb-4">Property Type</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className='border-1 inline-block p-2 rounded-md '>
                          <Image
                            src="/images/home.svg"
                            alt="Spain Flag"
                            width={20}
                            height={20}
                            className="rounded-full"
                          />
                        </div>
                        <span className="text-gray-600">12000 sqft</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">Features</h3>
                  <div>
                    <div className="flex gap-8  ">
                      <div className="flex items-center space-x-2 ">
                        <div className='md:border-1 lg:border-1 border-[#B8CDF9]  inline-block lg:p-2 md:p-2 rounded-md '>
                          <Image
                            src="/images/Wifi.svg"
                            alt="Spain Flag"
                            width={20}
                            height={20}
                            className="rounded-full"
                          />
                        </div>
                        <span className="text-gray-600">Wifi</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className='md:border-1 lg:border-1 border-[#B8CDF9]  inline-block lg:p-2 md:p-2 rounded-md '>
                          <Image
                            src="/images/Dining.svg"
                            alt="Spain Flag"
                            width={20}
                            height={20}
                            className="rounded-full"
                          />
                        </div>
                        <span className="text-gray-600">Dining</span>


                      </div>
                      <div className="flex items-center space-x-2">
                        <div className='border-1 border-[#B8CDF9] inline-block p-2 rounded-md '>
                          <div className='flex'>
                            {/* svg-4 */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                              <path d="M4.2864 2.68555L6.01686 1.53203C6.38969 1.2837 6.49456 0.777924 6.24318 0.400408C5.99406 0.0267272 5.48747 -0.0783832 5.11156 0.174083L2.66347 1.80612C2.27009 2.0689 2.18547 2.60441 2.46342 2.97477L4.34012 5.50425L0.181213 8.27697C0.636828 8.38499 1.0697 8.58599 1.45301 8.89273C1.74386 9.12509 2.08093 9.1255 2.37145 8.89273C2.95201 8.42854 3.63971 8.1831 4.36052 8.1831C5.08133 8.1831 5.76904 8.42854 6.34919 8.89273C6.64004 9.12509 6.9771 9.1255 7.26763 8.89273C7.63219 8.60123 8.04192 8.40703 8.47267 8.29465L4.2864 2.68555Z" fill="#8B939F" />
                            </svg>
                            {/* svg-5 */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                              <path d="M1.82845 0.328369C0.928349 0.328369 0.196411 1.06031 0.196411 1.96044C0.196411 2.86054 0.928349 3.59248 1.82845 3.59248C2.72856 3.59248 3.46052 2.86054 3.46052 1.96044C3.46049 1.06031 2.72856 0.328369 1.82845 0.328369Z" fill="#8B939F" />
                            </svg>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="3" viewBox="0 0 15 3" fill="none">
                            <path d="M14.0752 0.729397C13.9672 0.676407 13.862 0.609053 13.7629 0.529758C12.8783 -0.177888 11.6621 -0.177888 10.7775 0.529758C10.1894 1.00071 9.4276 1.00071 8.83948 0.529758C7.95491 -0.177888 6.76594 -0.177888 5.88137 0.529758C5.29325 1.00071 4.53142 1.00071 3.9433 0.529758C3.05873 -0.177888 1.84297 -0.177888 0.958401 0.529758C0.84921 0.617023 0.732865 0.689137 0.612956 0.74493C0.468701 0.811875 0.376648 0.95613 0.376648 1.11507V2.45251C0.580367 2.39588 0.778728 2.30548 0.957993 2.16221C1.84256 1.45375 3.05873 1.45415 3.9433 2.1618C4.53142 2.63276 5.29325 2.63276 5.88137 2.1618C6.76594 1.45415 7.95491 1.45415 8.83948 2.1618C9.4276 2.63276 10.1894 2.63276 10.7775 2.1618C11.6621 1.45415 12.8783 1.45415 13.7629 2.1618C13.9302 2.29599 14.1147 2.37836 14.3036 2.43646V1.09557C14.3035 0.939754 14.2151 0.79792 14.0752 0.729397Z" fill="#8B939F" />
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="3" viewBox="0 0 15 3" fill="none">
                            <path d="M13.2528 0.799324C12.6647 0.328367 11.8757 0.328367 11.2876 0.799324C10.403 1.50697 9.21403 1.50697 8.32946 0.799324C7.74134 0.328367 6.97951 0.328367 6.39139 0.799324C5.50682 1.50697 4.31785 1.50697 3.43328 0.799324C2.84517 0.328367 2.05613 0.328367 1.46801 0.799324C1.13592 1.06449 0.762923 1.23084 0.376648 1.29833V2.55579C0.376648 2.7813 0.55915 2.9638 0.784658 2.9638H13.8955C14.121 2.9638 14.3035 2.7813 14.3035 2.55579V1.29101C13.9332 1.21903 13.5744 1.05622 13.2528 0.799324Z" fill="#8B939F" />
                          </svg>
                        </div>
                        <span className="text-gray-600">Swimming Pool</span>
                      </div>
                    </div>


                    <div className='flex  gap-14 mt-4'>
                      <div className="flex items-center space-x-2 ">
                        <div className='border-1 border-[#B8CDF9] inline-block py-3 px-2 rounded-md '>
                          <Image
                            src="/images/Air.svg"
                            alt="Spain Flag"
                            width={20}
                            height={20}
                            className="rounded-full"
                          />
                        </div>
                        <span className="text-gray-600">Air Conditioning</span>
                      </div>
                      <div className="flex items-center space-x-2 ">
                        <div className='border-1 border-[#B8CDF9] inline-block p-2 rounded-md '>
                          <Image
                            src="/images/Gym.svg"
                            alt="Spain Flag"
                            width={20}
                            height={20}
                            className="rounded-full"
                          />
                        </div>
                        <span className="text-gray-600">Gym</span>
                      </div>

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
          <div className="lg:w-1/3 md:mt-8 lg:mt-8 ">
            <Card className=" top-6">
              <CardContent className="p-4 md:p-6">
                <div className="mb-4">
                  <p className="text-gray-600 text-xs md:text-sm mb-1">1 week, 2 adults, 1 child</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">USD $6,112</p>
                </div>
                <button className="w-full bg-[#007DD0] text-white py-3 rounded-full">
                  Reserve
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}