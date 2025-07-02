'use client';

import { Calendar, Home, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function RoomListing() {
  return (
    <div className="w-full mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Availability</h2>
      </div>

      {/* Search Form */}
      <div className=" rounded-lg p-4 mb-6 border-2 border-[#A3D0EE] w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          {/* Check-in */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Check-In</label>
            <div className="mt-2 relative ">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5 bg-blue-500 rounded-full p-1" />
              <input
                type="text"
                defaultValue="Tue,23 June 2024"
                className="text-[13px] font-medium w-full pl-10 pr-4 py-2  rounded-full
                bg-[#F6F6F6] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Check-Out</label>
            <div className="mt-2 relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2  text-white w-5 h-5 bg-blue-500 rounded-full p-1" />
              <input
                type="text"
                defaultValue="Sat,29 June 2024"
                className="text-[13px] font-medium w-full pl-10 pr-4 py-2  rounded-full
                bg-[#F6F6F6] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Room & Guest */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Room & Guest</label>
            <div className="mt-2 relative">
              <Home className="absolute left-3 top-1/2 transform -translate-y-1/2  
               text-white w-5 h-5 bg-blue-500 rounded-full p-1
              " />

              <input
                type="text"
                defaultValue="2 Adults - 0 Children - 1 Room"
                className="text-[13px] font-medium w-full pl-10 pr-4 py-2  rounded-full
                bg-[#F6F6F6] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <Button className="w-full bg-[#007DD0] hover:bg-blue-700 text-white py-2 px-6 rounded-full">
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Room Table - Desktop */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full bg-white overflow-hidden shadow-sm  ">
          {/* Table Header */}
          <thead className="bg-[#007DD0] text-white  ">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Room type</th>
              <th className="px-4 py-3 text-left font-medium">Number of guests</th>
              <th className="px-4 py-3 text-left font-medium">Price for 1 week</th>
              <th className="px-4 py-3 text-left font-medium">Your choices</th>
              <th className="px-4 py-3 text-left font-medium">Select rooms</th>
              <th className="px-4 py-3 text-left font-medium">Your choices</th>
            </tr>
          </thead>
          {/* npm-1 */}
          {/* Table Body */}
          <tbody className="divide-y divide-blue-300">
            {/* Twin Room */}
            <tr className="hover:bg-gray-50">
              <td className=" py-6  align-top">
                <div className='h-[120px] border-r border-blue-300'>
                  <h3 className="font-medium text-[#007DD0] mb-2">Twin Room</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className='flex items-center gap-2'>
                        <div>
                          <h1>2 single beds</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M16 11.865H1" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" />
                            <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M16 11.865H1" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" />
                            <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
       
                      <div className='flex items-center gap-2'>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
                            <path d="M2.25 16.24V5.73999C2.25 3.61867 2.25 2.55801 2.90901 1.899C3.56802 1.23999 4.62868 1.23999 6.75 1.23999H8.25C10.3713 1.23999 11.432 1.23999 12.091 1.899C12.75 2.55801 12.75 3.61867 12.75 5.73999V16.24H2.25Z" stroke="#626262" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.5 7.98999V4.98999C4.5 3.74899 4.759 3.48999 6 3.48999H9C10.241 3.48999 10.5 3.74899 10.5 4.98999V7.98999C10.5 9.23099 10.241 9.48999 9 9.48999H6C4.759 9.48999 4.5 9.23099 4.5 7.98999Z" stroke="#626262" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M0.75 16.24H14.25" stroke="#626262" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.5 3.48999V9.48999M10.5 6.48999L4.5 6.48999" stroke="#626262" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.506 12.49L4.49927 12.49" stroke="#626262" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                        <div><h1>Room</h1></div>

                      </div>
                   

                      <div className='flex items-center gap-2'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                          <path d="M3.25 15.74H2.875V16.115H3.25V15.74ZM7.26517 12.2552C7.41161 12.1087 7.41161 11.8713 7.26517 11.7248C7.11872 11.5784 6.88128 11.5784 6.73483 11.7248L7.26517 12.2552ZM3.25 11.24H2.875V15.74H3.25H3.625V11.24H3.25ZM3.25 15.74V16.115H7.75V15.74V15.365H3.25V15.74ZM3.25 15.74L3.51516 16.0052L7.26517 12.2552L7 11.99L6.73483 11.7248L2.98484 15.4748L3.25 15.74Z" fill="#626262" />
                          <path d="M15.25 3.73999H15.625V3.36499H15.25V3.73999ZM11.2348 7.22483C11.0884 7.37127 11.0884 7.60871 11.2348 7.75516C11.3813 7.9016 11.6187 7.9016 11.7652 7.75516L11.2348 7.22483ZM15.25 8.23999H15.625V3.73999H15.25H14.875V8.23999H15.25ZM15.25 3.73999V3.36499H10.75V3.73999V4.11499H15.25V3.73999ZM15.25 3.73999L14.9848 3.47483L11.2348 7.22483L11.5 7.48999L11.7652 7.75516L15.5152 4.00516L15.25 3.73999Z" fill="#626262" />
                        </svg></div>
                        <div><h1>1200 <sub>sq ft</sub></h1></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
             
                      <div className='flex items-center gap-2'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                          <path d="M1 3.19607C3.625 5.76984 7.43162 4.6668 8.29933 3.19607C8.42695 2.97975 8.5 2.7286 8.5 2.46071C8.5 1.64846 7.82843 0.98999 7 0.98999C6.17157 0.98999 5.5 1.64846 5.5 2.46071" stroke="#626262" stroke-width="1.125" stroke-linecap="round" />
                          <path d="M12.25 5.43609C12.25 4.22322 13.0895 3.23999 14.125 3.23999C15.1605 3.23999 16 4.22322 16 5.43609C16 5.97389 15.835 6.46653 15.561 6.84833C14.0097 9.38363 6.4573 8.42728 2.5 7.6322" stroke="#626262" stroke-width="1.125" stroke-linecap="round" />
                          <path d="M9.31403 13.6555C9.46847 14.1417 9.88518 14.49 10.375 14.49C10.9963 14.49 11.5 13.9296 11.5 13.2382C11.5 13.0032 11.4418 12.7833 11.3405 12.5953C10.3749 10.7343 5.49997 9.48292 1 12.821" stroke="#626262" stroke-width="1.125" stroke-linecap="round" />
                          <path d="M13.75 10.365H15.25" stroke="#626262" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></div>
                        <div><h1>Air condition</h1></div>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                          <path d="M3.75 11.74L3.125 12.365M11.25 11.74L11.875 12.365" stroke="#626262" stroke-width="1.125" stroke-linecap="round" />
                          <path d="M1.875 6.73999V7.36499C1.875 9.42738 1.875 10.4586 2.5157 11.0993C3.15641 11.74 4.18761 11.74 6.25 11.74H8.75C10.8124 11.74 11.8436 11.74 12.4843 11.0993C13.125 10.4586 13.125 9.42738 13.125 7.36499V6.73999" stroke="#626262" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M1.25 6.73999L13.75 6.73999" stroke="#626262" stroke-width="0.75" stroke-linecap="round" />
                          <path d="M2.5 6.73999V2.69212C2.5 1.82109 3.2061 1.11499 4.07713 1.11499C4.77604 1.11499 5.39159 1.57498 5.58962 2.24524L5.625 2.36499" stroke="#626262" stroke-width="0.75" stroke-linecap="round" />
                          <path d="M5 2.98999L6.5625 1.73999" stroke="#626262" stroke-width="1.125" stroke-linecap="round" />
                        </svg></div>
                        <div><h1>Bathroom</h1></div>
                      </div>
                    
                    </div>
                    <div className="flex items-center gap-8">
                
                      <div className='flex items-center gap-2'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <path d="M1.375 7.98999C1.375 10.1113 1.375 11.172 2.03401 11.831C2.69302 12.49 3.75368 12.49 5.875 12.49H11.125C13.2463 12.49 14.307 12.49 14.966 11.831C15.625 11.172 15.625 10.1113 15.625 7.98999V5.73999C15.625 3.61867 15.625 2.55801 14.966 1.899C14.307 1.23999 13.2463 1.23999 11.125 1.23999H5.875C3.75368 1.23999 2.69302 1.23999 2.03401 1.899C1.375 2.55801 1.375 3.61867 1.375 5.73999V7.98999Z" stroke="#626262" stroke-width="1.125"/>
  <path d="M7.9375 16.24C7.9375 16.5507 8.18934 16.8025 8.5 16.8025C8.81066 16.8025 9.0625 16.5507 9.0625 16.24L7.9375 16.24ZM8.5 12.49L7.9375 12.49L7.9375 16.24L8.5 16.24L9.0625 16.24L9.0625 12.49L8.5 12.49Z" fill="#626262"/>
  <path d="M4.75 16.24L8.50005 13.99L12.25 16.24" stroke="#626262" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
                        <div><h1>TV</h1></div>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M0.875 7.73999C0.875 4.38123 0.875 2.70185 1.91843 1.65842C2.96186 0.61499 4.64124 0.61499 8 0.61499C11.3588 0.61499 13.0381 0.61499 14.0816 1.65842C15.125 2.70185 15.125 4.38123 15.125 7.73999C15.125 11.0987 15.125 12.7781 14.0816 13.8216C13.0381 14.865 11.3588 14.865 8 14.865C4.64124 14.865 2.96186 14.865 1.91843 13.8216C0.875 12.7781 0.875 11.0987 0.875 7.73999Z" stroke="#626262" stroke-width="1.125"/>
  <path d="M5 6.47516C5.86163 5.85208 6.89065 5.48999 7.99592 5.48999C9.10468 5.48999 10.1367 5.85437 11 6.48107M9.63069 8.48999C9.13862 8.21724 8.58343 8.06378 7.99592 8.06378C7.41137 8.06378 6.85881 8.2157 6.36858 8.48589" stroke="#626262" stroke-width="1.125" stroke-linecap="round"/>
  <path d="M8 10.74H8.00476" stroke="#626262" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
                        <div><h1>WIFI</h1></div>
                      </div>
                  
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-6  align-top">
                <div className="flex items-start justify-start h-[120px] border-r border-blue-300">
                  <User className="w-5 h-5 text-gray-600" />
                  <User className="w-5 h-5 text-gray-600" />
                </div>
              </td>
              <td className="px-4 py-6  align-top">
                <div className="text-xl font-bold h-[120px] border-r border-blue-300">$282</div>
              </td>
              <td className="px-4 py-6  align-top">
                <div className='h-[120px] border-r border-blue-300'>
                  <div className="text-sm text-gray-600 mb-1">Breakfast included</div>
                  <div className="text-sm text-red-600 font-medium">Only 4 rooms left</div>
                </div>
              </td>
              <td className=" py-6">
                <div className="relative h-[120px] border-r border-blue-300   flex justify-center items-start ">
                  <div className='flex space-x-2 border-2 px-2 rounded-full'>
                    <div className=''>
                      <select className="appearance-none bg-white border-none">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div className=''>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                        <path d="M10.68 15.6921C10.057 15.6921 9.43402 15.4518 8.96232 14.9801L3.15952 9.17726C2.90142 8.91916 2.90142 8.49196 3.15952 8.23386C3.41762 7.97576 3.84482 7.97576 4.10292 8.23386L9.90572 14.0367C10.3329 14.4639 11.0271 14.4639 11.4543 14.0367L17.2571 8.23386C17.5152 7.97576 17.9424 7.97576 18.2005 8.23386C18.4586 8.49196 18.4586 8.91916 18.2005 9.17726L12.3977 14.9801C11.926 15.4518 11.303 15.6921 10.68 15.6921Z" fill="#626262" />
                      </svg>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-6 align-top">
                <Button className="bg-[#007DD0] hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                  Reserve
                </Button>
              </td>
            </tr>


            {/* npm2 */}
            {/* Deluxe Double Room */}
           <tr className="hover:bg-gray-50">
              <td className=" py-6  align-top">
                <div className='h-[120px] border-r border-blue-300'>
                  <h3 className="font-medium text-[#007DD0] mb-2">Deluxe Double Room</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className='flex items-center gap-2'>
                        <div>
                          <h1>2 single beds</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M16 11.865H1" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" />
                            <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M16 11.865H1" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" />
                            <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                     
                      <div className='flex items-center gap-2'>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
                            <path d="M2.25 16.24V5.73999C2.25 3.61867 2.25 2.55801 2.90901 1.899C3.56802 1.23999 4.62868 1.23999 6.75 1.23999H8.25C10.3713 1.23999 11.432 1.23999 12.091 1.899C12.75 2.55801 12.75 3.61867 12.75 5.73999V16.24H2.25Z" stroke="#626262" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.5 7.98999V4.98999C4.5 3.74899 4.759 3.48999 6 3.48999H9C10.241 3.48999 10.5 3.74899 10.5 4.98999V7.98999C10.5 9.23099 10.241 9.48999 9 9.48999H6C4.759 9.48999 4.5 9.23099 4.5 7.98999Z" stroke="#626262" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M0.75 16.24H14.25" stroke="#626262" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.5 3.48999V9.48999M10.5 6.48999L4.5 6.48999" stroke="#626262" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.506 12.49L4.49927 12.49" stroke="#626262" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                        <div><h1>Room</h1></div>

                      </div>
                  

                      <div className='flex items-center gap-2'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                          <path d="M3.25 15.74H2.875V16.115H3.25V15.74ZM7.26517 12.2552C7.41161 12.1087 7.41161 11.8713 7.26517 11.7248C7.11872 11.5784 6.88128 11.5784 6.73483 11.7248L7.26517 12.2552ZM3.25 11.24H2.875V15.74H3.25H3.625V11.24H3.25ZM3.25 15.74V16.115H7.75V15.74V15.365H3.25V15.74ZM3.25 15.74L3.51516 16.0052L7.26517 12.2552L7 11.99L6.73483 11.7248L2.98484 15.4748L3.25 15.74Z" fill="#626262" />
                          <path d="M15.25 3.73999H15.625V3.36499H15.25V3.73999ZM11.2348 7.22483C11.0884 7.37127 11.0884 7.60871 11.2348 7.75516C11.3813 7.9016 11.6187 7.9016 11.7652 7.75516L11.2348 7.22483ZM15.25 8.23999H15.625V3.73999H15.25H14.875V8.23999H15.25ZM15.25 3.73999V3.36499H10.75V3.73999V4.11499H15.25V3.73999ZM15.25 3.73999L14.9848 3.47483L11.2348 7.22483L11.5 7.48999L11.7652 7.75516L15.5152 4.00516L15.25 3.73999Z" fill="#626262" />
                        </svg></div>
                        <div><h1>1200 <sub>sq ft</sub></h1></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                     
                      <div className='flex items-center gap-2'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                          <path d="M1 3.19607C3.625 5.76984 7.43162 4.6668 8.29933 3.19607C8.42695 2.97975 8.5 2.7286 8.5 2.46071C8.5 1.64846 7.82843 0.98999 7 0.98999C6.17157 0.98999 5.5 1.64846 5.5 2.46071" stroke="#626262" stroke-width="1.125" stroke-linecap="round" />
                          <path d="M12.25 5.43609C12.25 4.22322 13.0895 3.23999 14.125 3.23999C15.1605 3.23999 16 4.22322 16 5.43609C16 5.97389 15.835 6.46653 15.561 6.84833C14.0097 9.38363 6.4573 8.42728 2.5 7.6322" stroke="#626262" stroke-width="1.125" stroke-linecap="round" />
                          <path d="M9.31403 13.6555C9.46847 14.1417 9.88518 14.49 10.375 14.49C10.9963 14.49 11.5 13.9296 11.5 13.2382C11.5 13.0032 11.4418 12.7833 11.3405 12.5953C10.3749 10.7343 5.49997 9.48292 1 12.821" stroke="#626262" stroke-width="1.125" stroke-linecap="round" />
                          <path d="M13.75 10.365H15.25" stroke="#626262" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></div>
                        <div><h1>Air condition</h1></div>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                          <path d="M3.75 11.74L3.125 12.365M11.25 11.74L11.875 12.365" stroke="#626262" stroke-width="1.125" stroke-linecap="round" />
                          <path d="M1.875 6.73999V7.36499C1.875 9.42738 1.875 10.4586 2.5157 11.0993C3.15641 11.74 4.18761 11.74 6.25 11.74H8.75C10.8124 11.74 11.8436 11.74 12.4843 11.0993C13.125 10.4586 13.125 9.42738 13.125 7.36499V6.73999" stroke="#626262" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M1.25 6.73999L13.75 6.73999" stroke="#626262" stroke-width="0.75" stroke-linecap="round" />
                          <path d="M2.5 6.73999V2.69212C2.5 1.82109 3.2061 1.11499 4.07713 1.11499C4.77604 1.11499 5.39159 1.57498 5.58962 2.24524L5.625 2.36499" stroke="#626262" stroke-width="0.75" stroke-linecap="round" />
                          <path d="M5 2.98999L6.5625 1.73999" stroke="#626262" stroke-width="1.125" stroke-linecap="round" />
                        </svg></div>
                        <div><h1>Bathroom</h1></div>
                      </div>
                    
                    </div>
                    <div className="flex items-center gap-8">
                  
                      <div className='flex items-center gap-2'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <path d="M1.375 7.98999C1.375 10.1113 1.375 11.172 2.03401 11.831C2.69302 12.49 3.75368 12.49 5.875 12.49H11.125C13.2463 12.49 14.307 12.49 14.966 11.831C15.625 11.172 15.625 10.1113 15.625 7.98999V5.73999C15.625 3.61867 15.625 2.55801 14.966 1.899C14.307 1.23999 13.2463 1.23999 11.125 1.23999H5.875C3.75368 1.23999 2.69302 1.23999 2.03401 1.899C1.375 2.55801 1.375 3.61867 1.375 5.73999V7.98999Z" stroke="#626262" stroke-width="1.125"/>
  <path d="M7.9375 16.24C7.9375 16.5507 8.18934 16.8025 8.5 16.8025C8.81066 16.8025 9.0625 16.5507 9.0625 16.24L7.9375 16.24ZM8.5 12.49L7.9375 12.49L7.9375 16.24L8.5 16.24L9.0625 16.24L9.0625 12.49L8.5 12.49Z" fill="#626262"/>
  <path d="M4.75 16.24L8.50005 13.99L12.25 16.24" stroke="#626262" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
                        <div><h1>TV</h1></div>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M0.875 7.73999C0.875 4.38123 0.875 2.70185 1.91843 1.65842C2.96186 0.61499 4.64124 0.61499 8 0.61499C11.3588 0.61499 13.0381 0.61499 14.0816 1.65842C15.125 2.70185 15.125 4.38123 15.125 7.73999C15.125 11.0987 15.125 12.7781 14.0816 13.8216C13.0381 14.865 11.3588 14.865 8 14.865C4.64124 14.865 2.96186 14.865 1.91843 13.8216C0.875 12.7781 0.875 11.0987 0.875 7.73999Z" stroke="#626262" stroke-width="1.125"/>
  <path d="M5 6.47516C5.86163 5.85208 6.89065 5.48999 7.99592 5.48999C9.10468 5.48999 10.1367 5.85437 11 6.48107M9.63069 8.48999C9.13862 8.21724 8.58343 8.06378 7.99592 8.06378C7.41137 8.06378 6.85881 8.2157 6.36858 8.48589" stroke="#626262" stroke-width="1.125" stroke-linecap="round"/>
  <path d="M8 10.74H8.00476" stroke="#626262" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
                        <div><h1>WIFI</h1></div>
                      </div>
                  
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-6  align-top">
                <div className="flex items-start justify-start h-[120px] border-r border-blue-300">
                  <User className="w-5 h-5 text-gray-600" />
                  <User className="w-5 h-5 text-gray-600" />
                </div>
              </td>
              <td className="px-4 py-6  align-top">
                <div className="text-xl font-bold h-[120px] border-r border-blue-300">$282</div>
              </td>
              <td className="px-4 py-6  align-top">
                <div className='h-[120px] border-r border-blue-300'>
                  <div className="text-sm text-gray-600 mb-1">Breakfast included</div>
                  <div className="text-sm text-red-600 font-medium">Only 4 rooms left</div>
                </div>
              </td>
              <td className=" py-6">
                <div className="relative h-[120px]    flex justify-center items-start ">
                  <div className='flex space-x-2 border-2 px-2 rounded-full'>
                    <div className=''>
                      <select className="appearance-none bg-white border-none">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div className=''>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                        <path d="M10.68 15.6921C10.057 15.6921 9.43402 15.4518 8.96232 14.9801L3.15952 9.17726C2.90142 8.91916 2.90142 8.49196 3.15952 8.23386C3.41762 7.97576 3.84482 7.97576 4.10292 8.23386L9.90572 14.0367C10.3329 14.4639 11.0271 14.4639 11.4543 14.0367L17.2571 8.23386C17.5152 7.97576 17.9424 7.97576 18.2005 8.23386C18.4586 8.49196 18.4586 8.91916 18.2005 9.17726L12.3977 14.9801C11.926 15.4518 11.303 15.6921 10.68 15.6921Z" fill="#626262" />
                      </svg>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-6 align-top">
                <Button className="bg-[#007DD0] hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                  Reserve
                </Button>
              </td>
            </tr>

            {/* Third Room */}
             <tr className="hover:bg-gray-50 ">
              <td className=" py-6  align-top">
                <div className='h-[120px] border-r border-blue-300'>
                  <h3 className="font-medium text-[#007DD0] mb-2">Deluxe Double Room</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className='flex items-center gap-2'>
                        <div>
                          <h1>2 single beds</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M16 11.865H1" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" />
                            <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M16 11.865H1" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" />
                            <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#141B34" stroke-width="1.125" stroke-linecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                     
                      <div className='flex items-center gap-2'>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
                            <path d="M2.25 16.24V5.73999C2.25 3.61867 2.25 2.55801 2.90901 1.899C3.56802 1.23999 4.62868 1.23999 6.75 1.23999H8.25C10.3713 1.23999 11.432 1.23999 12.091 1.899C12.75 2.55801 12.75 3.61867 12.75 5.73999V16.24H2.25Z" stroke="#626262" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.5 7.98999V4.98999C4.5 3.74899 4.759 3.48999 6 3.48999H9C10.241 3.48999 10.5 3.74899 10.5 4.98999V7.98999C10.5 9.23099 10.241 9.48999 9 9.48999H6C4.759 9.48999 4.5 9.23099 4.5 7.98999Z" stroke="#626262" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M0.75 16.24H14.25" stroke="#626262" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.5 3.48999V9.48999M10.5 6.48999L4.5 6.48999" stroke="#626262" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.506 12.49L4.49927 12.49" stroke="#626262" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                        <div><h1>Room</h1></div>

                      </div>
                  

                      <div className='flex items-center gap-2'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                          <path d="M3.25 15.74H2.875V16.115H3.25V15.74ZM7.26517 12.2552C7.41161 12.1087 7.41161 11.8713 7.26517 11.7248C7.11872 11.5784 6.88128 11.5784 6.73483 11.7248L7.26517 12.2552ZM3.25 11.24H2.875V15.74H3.25H3.625V11.24H3.25ZM3.25 15.74V16.115H7.75V15.74V15.365H3.25V15.74ZM3.25 15.74L3.51516 16.0052L7.26517 12.2552L7 11.99L6.73483 11.7248L2.98484 15.4748L3.25 15.74Z" fill="#626262" />
                          <path d="M15.25 3.73999H15.625V3.36499H15.25V3.73999ZM11.2348 7.22483C11.0884 7.37127 11.0884 7.60871 11.2348 7.75516C11.3813 7.9016 11.6187 7.9016 11.7652 7.75516L11.2348 7.22483ZM15.25 8.23999H15.625V3.73999H15.25H14.875V8.23999H15.25ZM15.25 3.73999V3.36499H10.75V3.73999V4.11499H15.25V3.73999ZM15.25 3.73999L14.9848 3.47483L11.2348 7.22483L11.5 7.48999L11.7652 7.75516L15.5152 4.00516L15.25 3.73999Z" fill="#626262" />
                        </svg></div>
                        <div><h1>1200 <sub>sq ft</sub></h1></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
             
                      <div className='flex items-center gap-2'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                          <path d="M1 3.19607C3.625 5.76984 7.43162 4.6668 8.29933 3.19607C8.42695 2.97975 8.5 2.7286 8.5 2.46071C8.5 1.64846 7.82843 0.98999 7 0.98999C6.17157 0.98999 5.5 1.64846 5.5 2.46071" stroke="#626262" stroke-width="1.125" stroke-linecap="round" />
                          <path d="M12.25 5.43609C12.25 4.22322 13.0895 3.23999 14.125 3.23999C15.1605 3.23999 16 4.22322 16 5.43609C16 5.97389 15.835 6.46653 15.561 6.84833C14.0097 9.38363 6.4573 8.42728 2.5 7.6322" stroke="#626262" stroke-width="1.125" stroke-linecap="round" />
                          <path d="M9.31403 13.6555C9.46847 14.1417 9.88518 14.49 10.375 14.49C10.9963 14.49 11.5 13.9296 11.5 13.2382C11.5 13.0032 11.4418 12.7833 11.3405 12.5953C10.3749 10.7343 5.49997 9.48292 1 12.821" stroke="#626262" stroke-width="1.125" stroke-linecap="round" />
                          <path d="M13.75 10.365H15.25" stroke="#626262" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></div>
                        <div><h1>Air condition</h1></div>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                          <path d="M3.75 11.74L3.125 12.365M11.25 11.74L11.875 12.365" stroke="#626262" stroke-width="1.125" stroke-linecap="round" />
                          <path d="M1.875 6.73999V7.36499C1.875 9.42738 1.875 10.4586 2.5157 11.0993C3.15641 11.74 4.18761 11.74 6.25 11.74H8.75C10.8124 11.74 11.8436 11.74 12.4843 11.0993C13.125 10.4586 13.125 9.42738 13.125 7.36499V6.73999" stroke="#626262" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M1.25 6.73999L13.75 6.73999" stroke="#626262" stroke-width="0.75" stroke-linecap="round" />
                          <path d="M2.5 6.73999V2.69212C2.5 1.82109 3.2061 1.11499 4.07713 1.11499C4.77604 1.11499 5.39159 1.57498 5.58962 2.24524L5.625 2.36499" stroke="#626262" stroke-width="0.75" stroke-linecap="round" />
                          <path d="M5 2.98999L6.5625 1.73999" stroke="#626262" stroke-width="1.125" stroke-linecap="round" />
                        </svg></div>
                        <div><h1>Bathroom</h1></div>
                      </div>
                    
                    </div>
                    <div className="flex items-center gap-8">
             
                      <div className='flex items-center gap-2'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <path d="M1.375 7.98999C1.375 10.1113 1.375 11.172 2.03401 11.831C2.69302 12.49 3.75368 12.49 5.875 12.49H11.125C13.2463 12.49 14.307 12.49 14.966 11.831C15.625 11.172 15.625 10.1113 15.625 7.98999V5.73999C15.625 3.61867 15.625 2.55801 14.966 1.899C14.307 1.23999 13.2463 1.23999 11.125 1.23999H5.875C3.75368 1.23999 2.69302 1.23999 2.03401 1.899C1.375 2.55801 1.375 3.61867 1.375 5.73999V7.98999Z" stroke="#626262" stroke-width="1.125"/>
  <path d="M7.9375 16.24C7.9375 16.5507 8.18934 16.8025 8.5 16.8025C8.81066 16.8025 9.0625 16.5507 9.0625 16.24L7.9375 16.24ZM8.5 12.49L7.9375 12.49L7.9375 16.24L8.5 16.24L9.0625 16.24L9.0625 12.49L8.5 12.49Z" fill="#626262"/>
  <path d="M4.75 16.24L8.50005 13.99L12.25 16.24" stroke="#626262" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
                        <div><h1>TV</h1></div>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M0.875 7.73999C0.875 4.38123 0.875 2.70185 1.91843 1.65842C2.96186 0.61499 4.64124 0.61499 8 0.61499C11.3588 0.61499 13.0381 0.61499 14.0816 1.65842C15.125 2.70185 15.125 4.38123 15.125 7.73999C15.125 11.0987 15.125 12.7781 14.0816 13.8216C13.0381 14.865 11.3588 14.865 8 14.865C4.64124 14.865 2.96186 14.865 1.91843 13.8216C0.875 12.7781 0.875 11.0987 0.875 7.73999Z" stroke="#626262" stroke-width="1.125"/>
  <path d="M5 6.47516C5.86163 5.85208 6.89065 5.48999 7.99592 5.48999C9.10468 5.48999 10.1367 5.85437 11 6.48107M9.63069 8.48999C9.13862 8.21724 8.58343 8.06378 7.99592 8.06378C7.41137 8.06378 6.85881 8.2157 6.36858 8.48589" stroke="#626262" stroke-width="1.125" stroke-linecap="round"/>
  <path d="M8 10.74H8.00476" stroke="#626262" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
                        <div><h1>WIFI</h1></div>
                      </div>
                  
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-6  align-top">
                <div className="flex items-start justify-start h-[120px] border-r border-blue-300">
                  <User className="w-5 h-5 text-gray-600" />
                  <User className="w-5 h-5 text-gray-600" />
                </div>
              </td>
              <td className="px-4 py-6  align-top">
                <div className="text-xl font-bold h-[120px] border-r border-blue-300">$282</div>
              </td>
              <td className="px-4 py-6  align-top">
                <div className='h-[120px] border-r border-blue-300'>
                  <div className="text-sm text-gray-600 mb-1">Breakfast included</div>
                  <div className="text-sm text-red-600 font-medium">Only 4 rooms left</div>
                </div>
              </td>
              <td className=" py-6">
                <div className="relative h-[120px]   flex justify-center items-start ">
                  <div className='flex space-x-2 border-2 px-2 rounded-full'>
                    <div className=''>
                      <select className="appearance-none bg-white border-none">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div className=''>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                        <path d="M10.68 15.6921C10.057 15.6921 9.43402 15.4518 8.96232 14.9801L3.15952 9.17726C2.90142 8.91916 2.90142 8.49196 3.15952 8.23386C3.41762 7.97576 3.84482 7.97576 4.10292 8.23386L9.90572 14.0367C10.3329 14.4639 11.0271 14.4639 11.4543 14.0367L17.2571 8.23386C17.5152 7.97576 17.9424 7.97576 18.2005 8.23386C18.4586 8.49196 18.4586 8.91916 18.2005 9.17726L12.3977 14.9801C11.926 15.4518 11.303 15.6921 10.68 15.6921Z" fill="#626262" />
                      </svg>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-6 align-top">
                <Button className="bg-[#007DD0] hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                  Reserve 
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tablet View - Medium screens */}

{/* Tablet View - Medium screens */}
<div className="hidden md:block lg:hidden overflow-x-auto">
  <div className="space-y-4">
    {/* Twin Room - Tablet */}
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="col-span-2">
          <h3 className="font-medium text-[#007DD0] mb-2">Twin Room</h3>
          <div className="space-y-1 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M16 11.865H1" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
                <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              </svg>
              <span>2 single beds</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
                <path d="M2.25 16.24V5.73999C2.25 3.61867 2.25 2.55801 2.90901 1.899C3.56802 1.23999 4.62868 1.23999 6.75 1.23999H8.25C10.3713 1.23999 11.432 1.23999 12.091 1.899C12.75 2.55801 12.75 3.61867 12.75 5.73999V16.24H2.25Z" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.5 7.98999V4.98999C4.5 3.74899 4.759 3.48999 6 3.48999H9C10.241 3.48999 10.5 3.74899 10.5 4.98999V7.98999C10.5 9.23099 10.241 9.48999 9 9.48999H6C4.759 9.48999 4.5 9.23099 4.5 7.98999Z" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.75 16.24H14.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.5 3.48999V9.48999M10.5 6.48999L4.5 6.48999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.506 12.49L4.49927 12.49" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Room</span>
              <span>•</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M3.25 15.74H2.875V16.115H3.25V15.74ZM7.26517 12.2552C7.41161 12.1087 7.41161 11.8713 7.26517 11.7248C7.11872 11.5784 6.88128 11.5784 6.73483 11.7248L7.26517 12.2552ZM3.25 11.24H2.875V15.74H3.25H3.625V11.24H3.25ZM3.25 15.74V16.115H7.75V15.74V15.365H3.25V15.74ZM3.25 15.74L3.51516 16.0052L7.26517 12.2552L7 11.99L6.73483 11.7248L2.98484 15.4748L3.25 15.74Z" fill="#626262" />
                <path d="M15.25 3.73999H15.625V3.36499H15.25V3.73999ZM11.2348 7.22483C11.0884 7.37127 11.0884 7.60871 11.2348 7.75516C11.3813 7.9016 11.6187 7.9016 11.7652 7.75516L11.2348 7.22483ZM15.25 8.23999H15.625V3.73999H15.25H14.875V8.23999H15.25ZM15.25 3.73999V3.36499H10.75V3.73999V4.11499H15.25V3.73999ZM15.25 3.73999L14.9848 3.47483L11.2348 7.22483L11.5 7.48999L11.7652 7.75516L15.5152 4.00516L15.25 3.73999Z" fill="#626262" />
              </svg>
              <span>1200 sq ft</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M1 3.19607C3.625 5.76984 7.43162 4.6668 8.29933 3.19607C8.42695 2.97975 8.5 2.7286 8.5 2.46071C8.5 1.64846 7.82843 0.98999 7 0.98999C6.17157 0.98999 5.5 1.64846 5.5 2.46071" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
                <path d="M12.25 5.43609C12.25 4.22322 13.0895 3.23999 14.125 3.23999C15.1605 3.23999 16 4.22322 16 5.43609C16 5.97389 15.835 6.46653 15.561 6.84833C14.0097 9.38363 6.4573 8.42728 2.5 7.6322" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
                <path d="M9.31403 13.6555C9.46847 14.1417 9.88518 14.49 10.375 14.49C10.9963 14.49 11.5 13.9296 11.5 13.2382C11.5 13.0032 11.4418 12.7833 11.3405 12.5953C10.3749 10.7343 5.49997 9.48292 1 12.821" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
                <path d="M13.75 10.365H15.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Air condition</span>
              <span>•</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                <path d="M3.75 11.74L3.125 12.365M11.25 11.74L11.875 12.365" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
                <path d="M1.875 6.73999V7.36499C1.875 9.42738 1.875 10.4586 2.5157 11.0993C3.15641 11.74 4.18761 11.74 6.25 11.74H8.75C10.8124 11.74 11.8436 11.74 12.4843 11.0993C13.125 10.4586 13.125 9.42738 13.125 7.36499V6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.25 6.73999L13.75 6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" />
                <path d="M2.5 6.73999V2.69212C2.5 1.82109 3.2061 1.11499 4.07713 1.11499C4.77604 1.11499 5.39159 1.57498 5.58962 2.24524L5.625 2.36499" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" />
                <path d="M5 2.98999L6.5625 1.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              </svg>
              <span>Bathroom</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M1.375 7.98999C1.375 10.1113 1.375 11.172 2.03401 11.831C2.69302 12.49 3.75368 12.49 5.875 12.49H11.125C13.2463 12.49 14.307 12.49 14.966 11.831C15.625 11.172 15.625 10.1113 15.625 7.98999V5.73999C15.625 3.61867 15.625 2.55801 14.966 1.899C14.307 1.23999 13.2463 1.23999 11.125 1.23999H5.875C3.75368 1.23999 2.69302 1.23999 2.03401 1.899C1.375 2.55801 1.375 3.61867 1.375 5.73999V7.98999Z" stroke="#626262" strokeWidth="1.125"/>
                <path d="M7.9375 16.24C7.9375 16.5507 8.18934 16.8025 8.5 16.8025C8.81066 16.8025 9.0625 16.5507 9.0625 16.24L7.9375 16.24ZM8.5 12.49L7.9375 12.49L7.9375 16.24L8.5 16.24L9.0625 16.24L9.0625 12.49L8.5 12.49Z" fill="#626262"/>
                <path d="M4.75 16.24L8.50005 13.99L12.25 16.24" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>TV</span>
              <span>•</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M0.875 7.73999C0.875 4.38123 0.875 2.70185 1.91843 1.65842C2.96186 0.61499 4.64124 0.61499 8 0.61499C11.3588 0.61499 13.0381 0.61499 14.0816 1.65842C15.125 2.70185 15.125 4.38123 15.125 7.73999C15.125 11.0987 15.125 12.7781 14.0816 13.8216C13.0381 14.865 11.3588 14.865 8 14.865C4.64124 14.865 2.96186 14.865 1.91843 13.8216C0.875 12.7781 0.875 11.0987 0.875 7.73999Z" stroke="#626262" strokeWidth="1.125"/>
                <path d="M5 6.47516C5.86163 5.85208 6.89065 5.48999 7.99592 5.48999C9.10468 5.48999 10.1367 5.85437 11 6.48107M9.63069 8.48999C9.13862 8.21724 8.58343 8.06378 7.99592 8.06378C7.41137 8.06378 6.85881 8.2157 6.36858 8.48589" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
                <path d="M8 10.74H8.00476" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>WIFI</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <User className="w-4 h-4 text-gray-600" />
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-lg font-bold">$282</div>
          <div className="text-xs text-gray-600">Breakfast included</div>
          <div className="text-xs text-red-600">Only 4 rooms left</div>
        </div>
        <div className="flex flex-col gap-2">
          <select className="appearance-none bg-white border border-gray-300 rounded px-2 py-1 text-sm">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <Button className="bg-[#007DD0] hover:bg-blue-700 text-white px-4 py-1 rounded-full text-sm">
            Reserve
          </Button>
        </div>
      </div>
    </div>

    {/* Deluxe Double Room - Tablet */}
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="col-span-2">
          <h3 className="font-medium text-[#007DD0] mb-2">Deluxe Double Room</h3>
          <div className="space-y-1 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M16 11.865H1" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
                <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              </svg>
              <span>2 single beds</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
                <path d="M2.25 16.24V5.73999C2.25 3.61867 2.25 2.55801 2.90901 1.899C3.56802 1.23999 4.62868 1.23999 6.75 1.23999H8.25C10.3713 1.23999 11.432 1.23999 12.091 1.899C12.75 2.55801 12.75 3.61867 12.75 5.73999V16.24H2.25Z" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.5 7.98999V4.98999C4.5 3.74899 4.759 3.48999 6 3.48999H9C10.241 3.48999 10.5 3.74899 10.5 4.98999V7.98999C10.5 9.23099 10.241 9.48999 9 9.48999H6C4.759 9.48999 4.5 9.23099 4.5 7.98999Z" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.75 16.24H14.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.5 3.48999V9.48999M10.5 6.48999L4.5 6.48999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.506 12.49L4.49927 12.49" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Room</span>
              <span>•</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M3.25 15.74H2.875V16.115H3.25V15.74ZM7.26517 12.2552C7.41161 12.1087 7.41161 11.8713 7.26517 11.7248C7.11872 11.5784 6.88128 11.5784 6.73483 11.7248L7.26517 12.2552ZM3.25 11.24H2.875V15.74H3.25H3.625V11.24H3.25ZM3.25 15.74V16.115H7.75V15.74V15.365H3.25V15.74ZM3.25 15.74L3.51516 16.0052L7.26517 12.2552L7 11.99L6.73483 11.7248L2.98484 15.4748L3.25 15.74Z" fill="#626262" />
                <path d="M15.25 3.73999H15.625V3.36499H15.25V3.73999ZM11.2348 7.22483C11.0884 7.37127 11.0884 7.60871 11.2348 7.75516C11.3813 7.9016 11.6187 7.9016 11.7652 7.75516L11.2348 7.22483ZM15.25 8.23999H15.625V3.73999H15.25H14.875V8.23999H15.25ZM15.25 3.73999V3.36499H10.75V3.73999V4.11499H15.25V3.73999ZM15.25 3.73999L14.9848 3.47483L11.2348 7.22483L11.5 7.48999L11.7652 7.75516L15.5152 4.00516L15.25 3.73999Z" fill="#626262" />
              </svg>
              <span>1200 sq ft</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M1 3.19607C3.625 5.76984 7.43162 4.6668 8.29933 3.19607C8.42695 2.97975 8.5 2.7286 8.5 2.46071C8.5 1.64846 7.82843 0.98999 7 0.98999C6.17157 0.98999 5.5 1.64846 5.5 2.46071" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
                <path d="M12.25 5.43609C12.25 4.22322 13.0895 3.23999 14.125 3.23999C15.1605 3.23999 16 4.22322 16 5.43609C16 5.97389 15.835 6.46653 15.561 6.84833C14.0097 9.38363 6.4573 8.42728 2.5 7.6322" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
                <path d="M9.31403 13.6555C9.46847 14.1417 9.88518 14.49 10.375 14.49C10.9963 14.49 11.5 13.9296 11.5 13.2382C11.5 13.0032 11.4418 12.7833 11.3405 12.5953C10.3749 10.7343 5.49997 9.48292 1 12.821" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
                <path d="M13.75 10.365H15.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Air condition</span>
              <span>•</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                <path d="M3.75 11.74L3.125 12.365M11.25 11.74L11.875 12.365" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
                <path d="M1.875 6.73999V7.36499C1.875 9.42738 1.875 10.4586 2.5157 11.0993C3.15641 11.74 4.18761 11.74 6.25 11.74H8.75C10.8124 11.74 11.8436 11.74 12.4843 11.0993C13.125 10.4586 13.125 9.42738 13.125 7.36499V6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.25 6.73999L13.75 6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" />
                <path d="M2.5 6.73999V2.69212C2.5 1.82109 3.2061 1.11499 4.07713 1.11499C4.77604 1.11499 5.39159 1.57498 5.58962 2.24524L5.625 2.36499" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" />
                <path d="M5 2.98999L6.5625 1.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              </svg>
              <span>Bathroom</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M1.375 7.98999C1.375 10.1113 1.375 11.172 2.03401 11.831C2.69302 12.49 3.75368 12.49 5.875 12.49H11.125C13.2463 12.49 14.307 12.49 14.966 11.831C15.625 11.172 15.625 10.1113 15.625 7.98999V5.73999C15.625 3.61867 15.625 2.55801 14.966 1.899C14.307 1.23999 13.2463 1.23999 11.125 1.23999H5.875C3.75368 1.23999 2.69302 1.23999 2.03401 1.899C1.375 2.55801 1.375 3.61867 1.375 5.73999V7.98999Z" stroke="#626262" strokeWidth="1.125"/>
                <path d="M7.9375 16.24C7.9375 16.5507 8.18934 16.8025 8.5 16.8025C8.81066 16.8025 9.0625 16.5507 9.0625 16.24L7.9375 16.24ZM8.5 12.49L7.9375 12.49L7.9375 16.24L8.5 16.24L9.0625 16.24L9.0625 12.49L8.5 12.49Z" fill="#626262"/>
                <path d="M4.75 16.24L8.50005 13.99L12.25 16.24" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>TV</span>
              <span>•</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M0.875 7.73999C0.875 4.38123 0.875 2.70185 1.91843 1.65842C2.96186 0.61499 4.64124 0.61499 8 0.61499C11.3588 0.61499 13.0381 0.61499 14.0816 1.65842C15.125 2.70185 15.125 4.38123 15.125 7.73999C15.125 11.0987 15.125 12.7781 14.0816 13.8216C13.0381 14.865 11.3588 14.865 8 14.865C4.64124 14.865 2.96186 14.865 1.91843 13.8216C0.875 12.7781 0.875 11.0987 0.875 7.73999Z" stroke="#626262" strokeWidth="1.125"/>
                <path d="M5 6.47516C5.86163 5.85208 6.89065 5.48999 7.99592 5.48999C9.10468 5.48999 10.1367 5.85437 11 6.48107M9.63069 8.48999C9.13862 8.21724 8.58343 8.06378 7.99592 8.06378C7.41137 8.06378 6.85881 8.2157 6.36858 8.48589" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
                <path d="M8 10.74H8.00476" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>WIFI</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <User className="w-4 h-4 text-gray-600" />
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-lg font-bold">$282</div>
          <div className="text-xs text-gray-600">Breakfast included</div>
          <div className="text-xs text-red-600">Only 4 rooms left</div>
        </div>
        <div className="flex flex-col gap-2">
          <select className="appearance-none bg-white border border-gray-300 rounded px-2 py-1 text-sm">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <Button className="bg-[#007DD0] hover:bg-blue-700 text-white px-4 py-1 rounded-full text-sm">
            Reserve
          </Button>
        </div>
      </div>
    </div>

    {/* Third Room - Tablet */}
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="col-span-2">
          <h3 className="font-medium text-[#007DD0] mb-2">Deluxe Double Room</h3>
          <div className="space-y-1 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M16 11.865H1" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
                <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              </svg>
              <span>2 single beds</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
                <path d="M2.25 16.24V5.73999C2.25 3.61867 2.25 2.55801 2.90901 1.899C3.56802 1.23999 4.62868 1.23999 6.75 1.23999H8.25C10.3713 1.23999 11.432 1.23999 12.091 1.899C12.75 2.55801 12.75 3.61867 12.75 5.73999V16.24H2.25Z" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.5 7.98999V4.98999C4.5 3.74899 4.759 3.48999 6 3.48999H9C10.241 3.48999 10.5 3.74899 10.5 4.98999V7.98999C10.5 9.23099 10.241 9.48999 9 9.48999H6C4.759 9.48999 4.5 9.23099 4.5 7.98999Z" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.75 16.24H14.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.5 3.48999V9.48999M10.5 6.48999L4.5 6.48999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.506 12.49L4.49927 12.49" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Room</span>
              <span>•</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M3.25 15.74H2.875V16.115H3.25V15.74ZM7.26517 12.2552C7.41161 12.1087 7.41161 11.8713 7.26517 11.7248C7.11872 11.5784 6.88128 11.5784 6.73483 11.7248L7.26517 12.2552ZM3.25 11.24H2.875V15.74H3.25H3.625V11.24H3.25ZM3.25 15.74V16.115H7.75V15.74V15.365H3.25V15.74ZM3.25 15.74L3.51516 16.0052L7.26517 12.2552L7 11.99L6.73483 11.7248L2.98484 15.4748L3.25 15.74Z" fill="#626262" />
                <path d="M15.25 3.73999H15.625V3.36499H15.25V3.73999ZM11.2348 7.22483C11.0884 7.37127 11.0884 7.60871 11.2348 7.75516C11.3813 7.9016 11.6187 7.9016 11.7652 7.75516L11.2348 7.22483ZM15.25 8.23999H15.625V3.73999H15.25H14.875V8.23999H15.25ZM15.25 3.73999V3.36499H10.75V3.73999V4.11499H15.25V3.73999ZM15.25 3.73999L14.9848 3.47483L11.2348 7.22483L11.5 7.48999L11.7652 7.75516L15.5152 4.00516L15.25 3.73999Z" fill="#626262" />
              </svg>
              <span>1200 sq ft</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M1 3.19607C3.625 5.76984 7.43162 4.6668 8.29933 3.19607C8.42695 2.97975 8.5 2.7286 8.5 2.46071C8.5 1.64846 7.82843 0.98999 7 0.98999C6.17157 0.98999 5.5 1.64846 5.5 2.46071" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
                <path d="M12.25 5.43609C12.25 4.22322 13.0895 3.23999 14.125 3.23999C15.1605 3.23999 16 4.22322 16 5.43609C16 5.97389 15.835 6.46653 15.561 6.84833C14.0097 9.38363 6.4573 8.42728 2.5 7.6322" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
                <path d="M9.31403 13.6555C9.46847 14.1417 9.88518 14.49 10.375 14.49C10.9963 14.49 11.5 13.9296 11.5 13.2382C11.5 13.0032 11.4418 12.7833 11.3405 12.5953C10.3749 10.7343 5.49997 9.48292 1 12.821" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
                <path d="M13.75 10.365H15.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Air condition</span>
              <span>•</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                <path d="M3.75 11.74L3.125 12.365M11.25 11.74L11.875 12.365" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
                <path d="M1.875 6.73999V7.36499C1.875 9.42738 1.875 10.4586 2.5157 11.0993C3.15641 11.74 4.18761 11.74 6.25 11.74H8.75C10.8124 11.74 11.8436 11.74 12.4843 11.0993C13.125 10.4586 13.125 9.42738 13.125 7.36499V6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.25 6.73999L13.75 6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" />
                <path d="M2.5 6.73999V2.69212C2.5 1.82109 3.2061 1.11499 4.07713 1.11499C4.77604 1.11499 5.39159 1.57498 5.58962 2.24524L5.625 2.36499" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" />
                <path d="M5 2.98999L6.5625 1.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              </svg>
              <span>Bathroom</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M1.375 7.98999C1.375 10.1113 1.375 11.172 2.03401 11.831C2.69302 12.49 3.75368 12.49 5.875 12.49H11.125C13.2463 12.49 14.307 12.49 14.966 11.831C15.625 11.172 15.625 10.1113 15.625 7.98999V5.73999C15.625 3.61867 15.625 2.55801 14.966 1.899C14.307 1.23999 13.2463 1.23999 11.125 1.23999H5.875C3.75368 1.23999 2.69302 1.23999 2.03401 1.899C1.375 2.55801 1.375 3.61867 1.375 5.73999V7.98999Z" stroke="#626262" strokeWidth="1.125"/>
                <path d="M7.9375 16.24C7.9375 16.5507 8.18934 16.8025 8.5 16.8025C8.81066 16.8025 9.0625 16.5507 9.0625 16.24L7.9375 16.24ZM8.5 12.49L7.9375 12.49L7.9375 16.24L8.5 16.24L9.0625 16.24L9.0625 12.49L8.5 12.49Z" fill="#626262"/>
                <path d="M4.75 16.24L8.50005 13.99L12.25 16.24" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>TV</span>
              <span>•</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M0.875 7.73999C0.875 4.38123 0.875 2.70185 1.91843 1.65842C2.96186 0.61499 4.64124 0.61499 8 0.61499C11.3588 0.61499 13.0381 0.61499 14.0816 1.65842C15.125 2.70185 15.125 4.38123 15.125 7.73999C15.125 11.0987 15.125 12.7781 14.0816 13.8216C13.0381 14.865 11.3588 14.865 8 14.865C4.64124 14.865 2.96186 14.865 1.91843 13.8216C0.875 12.7781 0.875 11.0987 0.875 7.73999Z" stroke="#626262" strokeWidth="1.125"/>
                <path d="M5 6.47516C5.86163 5.85208 6.89065 5.48999 7.99592 5.48999C9.10468 5.48999 10.1367 5.85437 11 6.48107M9.63069 8.48999C9.13862 8.21724 8.58343 8.06378 7.99592 8.06378C7.41137 8.06378 6.85881 8.2157 6.36858 8.48589" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
                <path d="M8 10.74H8.00476" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>WIFI</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <User className="w-4 h-4 text-gray-600" />
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-lg font-bold">$282</div>
          <div className="text-xs text-gray-600">Breakfast included</div>
          <div className="text-xs text-red-600">Only 4 rooms left</div>
        </div>
        <div className="flex flex-col gap-2">
          <select className="appearance-none bg-white border border-gray-300 rounded px-2 py-1 text-sm">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <Button className="bg-[#007DD0] hover:bg-blue-700 text-white px-4 py-1 rounded-full text-sm">
            Reserve
          </Button>
        </div>
      </div>
    </div>
  </div>
</div>



      {/* Mobile View - Small screens */}
<div className="md:hidden space-y-4">
  {/* Twin Room - Mobile */}
  <Card className="p-4">
    <div className="space-y-4">
      <div>
        <h3 className="font-medium text-[#007DD0] mb-2">Twin Room</h3>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M16 11.865H1" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
            </svg>
            <span>2 single beds</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path d="M3.25 15.74H2.875V16.115H3.25V15.74ZM7.26517 12.2552C7.41161 12.1087 7.41161 11.8713 7.26517 11.7248C7.11872 11.5784 6.88128 11.5784 6.73483 11.7248L7.26517 12.2552ZM3.25 11.24H2.875V15.74H3.25H3.625V11.24H3.25ZM3.25 15.74V16.115H7.75V15.74V15.365H3.25V15.74ZM3.25 15.74L3.51516 16.0052L7.26517 12.2552L7 11.99L6.73483 11.7248L2.98484 15.4748L3.25 15.74Z" fill="#626262" />
              <path d="M15.25 3.73999H15.625V3.36499H15.25V3.73999ZM11.2348 7.22483C11.0884 7.37127 11.0884 7.60871 11.2348 7.75516C11.3813 7.9016 11.6187 7.9016 11.7652 7.75516L11.2348 7.22483ZM15.25 8.23999H15.625V3.73999H15.25H14.875V8.23999H15.25ZM15.25 3.73999V3.36499H10.75V3.73999V4.11499H15.25V3.73999ZM15.25 3.73999L14.9848 3.47483L11.2348 7.22483L11.5 7.48999L11.7652 7.75516L15.5152 4.00516L15.25 3.73999Z" fill="#626262" />
            </svg>
            <span>1200 sq ft</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M1 3.19607C3.625 5.76984 7.43162 4.6668 8.29933 3.19607C8.42695 2.97975 8.5 2.7286 8.5 2.46071C8.5 1.64846 7.82843 0.98999 7 0.98999C6.17157 0.98999 5.5 1.64846 5.5 2.46071" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              <path d="M12.25 5.43609C12.25 4.22322 13.0895 3.23999 14.125 3.23999C15.1605 3.23999 16 4.22322 16 5.43609C16 5.97389 15.835 6.46653 15.561 6.84833C14.0097 9.38363 6.4573 8.42728 2.5 7.6322" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              <path d="M9.31403 13.6555C9.46847 14.1417 9.88518 14.49 10.375 14.49C10.9963 14.49 11.5 13.9296 11.5 13.2382C11.5 13.0032 11.4418 12.7833 11.3405 12.5953C10.3749 10.7343 5.49997 9.48292 1 12.821" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              <path d="M13.75 10.365H15.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Air condition</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
              <path d="M3.75 11.74L3.125 12.365M11.25 11.74L11.875 12.365" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              <path d="M1.875 6.73999V7.36499C1.875 9.42738 1.875 10.4586 2.5157 11.0993C3.15641 11.74 4.18761 11.74 6.25 11.74H8.75C10.8124 11.74 11.8436 11.74 12.4843 11.0993C13.125 10.4586 13.125 9.42738 13.125 7.36499V6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1.25 6.73999L13.75 6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" />
              <path d="M2.5 6.73999V2.69212C2.5 1.82109 3.2061 1.11499 4.07713 1.11499C4.77604 1.11499 5.39159 1.57498 5.58962 2.24524L5.625 2.36499" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" />
              <path d="M5 2.98999L6.5625 1.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
            </svg>
            <span>Bathroom</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M1.375 7.98999C1.375 10.1113 1.375 11.172 2.03401 11.831C2.69302 12.49 3.75368 12.49 5.875 12.49H11.125C13.2463 12.49 14.307 12.49 14.966 11.831C15.625 11.172 15.625 10.1113 15.625 7.98999V5.73999C15.625 3.61867 15.625 2.55801 14.966 1.899C14.307 1.23999 13.2463 1.23999 11.125 1.23999H5.875C3.75368 1.23999 2.69302 1.23999 2.03401 1.899C1.375 2.55801 1.375 3.61867 1.375 5.73999V7.98999Z" stroke="#626262" strokeWidth="1.125"/>
              <path d="M7.9375 16.24C7.9375 16.5507 8.18934 16.8025 8.5 16.8025C8.81066 16.8025 9.0625 16.5507 9.0625 16.24L7.9375 16.24ZM8.5 12.49L7.9375 12.49L7.9375 16.24L8.5 16.24L9.0625 16.24L9.0625 12.49L8.5 12.49Z" fill="#626262"/>
              <path d="M4.75 16.24L8.50005 13.99L12.25 16.24" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>TV</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M0.875 7.73999C0.875 4.38123 0.875 2.70185 1.91843 1.65842C2.96186 0.61499 4.64124 0.61499 8 0.61499C11.3588 0.61499 13.0381 0.61499 14.0816 1.65842C15.125 2.70185 15.125 4.38123 15.125 7.73999C15.125 11.0987 15.125 12.7781 14.0816 13.8216C13.0381 14.865 11.3588 14.865 8 14.865C4.64124 14.865 2.96186 14.865 1.91843 13.8216C0.875 12.7781 0.875 11.0987 0.875 7.73999Z" stroke="#626262" strokeWidth="1.125"/>
              <path d="M5 6.47516C5.86163 5.85208 6.89065 5.48999 7.99592 5.48999C9.10468 5.48999 10.1367 5.85437 11 6.48107M9.63069 8.48999C9.13862 8.21724 8.58343 8.06378 7.99592 8.06378C7.41137 8.06378 6.85881 8.2157 6.36858 8.48589" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
              <path d="M8 10.74H8.00476" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>WIFI</span>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-sm text-gray-600 mr-2">Guests:</span>
          <User className="w-4 h-4 text-gray-600" />
          <User className="w-4 h-4 text-gray-600" />
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-xl font-bold text-gray-900">$282</div>
            <div className="text-sm text-gray-600">for 1 week</div>
            <div className="text-sm text-green-600 mt-1">✓ Breakfast included</div>
            <div className="text-sm text-red-600 font-medium">Only 4 rooms left</div>
          </div>
          <div className="text-right">
            <div className="mb-2">
              <label className="block text-xs text-gray-600 mb-1">Rooms</label>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm w-16">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <Button className="bg-[#007DD0] hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm">
              Reserve
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Card>

  {/* Deluxe Double Room - Mobile */}
  <Card className="p-4">
    <div className="space-y-4">
      <div>
        <h3 className="font-medium text-[#007DD0] mb-2">Deluxe Double Room</h3>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M16 11.865H1" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
            </svg>
            <span>2 single beds</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path d="M3.25 15.74H2.875V16.115H3.25V15.74ZM7.26517 12.2552C7.41161 12.1087 7.41161 11.8713 7.26517 11.7248C7.11872 11.5784 6.88128 11.5784 6.73483 11.7248L7.26517 12.2552ZM3.25 11.24H2.875V15.74H3.25H3.625V11.24H3.25ZM3.25 15.74V16.115H7.75V15.74V15.365H3.25V15.74ZM3.25 15.74L3.51516 16.0052L7.26517 12.2552L7 11.99L6.73483 11.7248L2.98484 15.4748L3.25 15.74Z" fill="#626262" />
              <path d="M15.25 3.73999H15.625V3.36499H15.25V3.73999ZM11.2348 7.22483C11.0884 7.37127 11.0884 7.60871 11.2348 7.75516C11.3813 7.9016 11.6187 7.9016 11.7652 7.75516L11.2348 7.22483ZM15.25 8.23999H15.625V3.73999H15.25H14.875V8.23999H15.25ZM15.25 3.73999V3.36499H10.75V3.73999V4.11499H15.25V3.73999ZM15.25 3.73999L14.9848 3.47483L11.2348 7.22483L11.5 7.48999L11.7652 7.75516L15.5152 4.00516L15.25 3.73999Z" fill="#626262" />
            </svg>
            <span>1200 sq ft</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M1 3.19607C3.625 5.76984 7.43162 4.6668 8.29933 3.19607C8.42695 2.97975 8.5 2.7286 8.5 2.46071C8.5 1.64846 7.82843 0.98999 7 0.98999C6.17157 0.98999 5.5 1.64846 5.5 2.46071" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              <path d="M12.25 5.43609C12.25 4.22322 13.0895 3.23999 14.125 3.23999C15.1605 3.23999 16 4.22322 16 5.43609C16 5.97389 15.835 6.46653 15.561 6.84833C14.0097 9.38363 6.4573 8.42728 2.5 7.6322" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              <path d="M9.31403 13.6555C9.46847 14.1417 9.88518 14.49 10.375 14.49C10.9963 14.49 11.5 13.9296 11.5 13.2382C11.5 13.0032 11.4418 12.7833 11.3405 12.5953C10.3749 10.7343 5.49997 9.48292 1 12.821" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              <path d="M13.75 10.365H15.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Air condition</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
              <path d="M3.75 11.74L3.125 12.365M11.25 11.74L11.875 12.365" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              <path d="M1.875 6.73999V7.36499C1.875 9.42738 1.875 10.4586 2.5157 11.0993C3.15641 11.74 4.18761 11.74 6.25 11.74H8.75C10.8124 11.74 11.8436 11.74 12.4843 11.0993C13.125 10.4586 13.125 9.42738 13.125 7.36499V6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1.25 6.73999L13.75 6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" />
              <path d="M2.5 6.73999V2.69212C2.5 1.82109 3.2061 1.11499 4.07713 1.11499C4.77604 1.11499 5.39159 1.57498 5.58962 2.24524L5.625 2.36499" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" />
              <path d="M5 2.98999L6.5625 1.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
            </svg>
            <span>Bathroom</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M1.375 7.98999C1.375 10.1113 1.375 11.172 2.03401 11.831C2.69302 12.49 3.75368 12.49 5.875 12.49H11.125C13.2463 12.49 14.307 12.49 14.966 11.831C15.625 11.172 15.625 10.1113 15.625 7.98999V5.73999C15.625 3.61867 15.625 2.55801 14.966 1.899C14.307 1.23999 13.2463 1.23999 11.125 1.23999H5.875C3.75368 1.23999 2.69302 1.23999 2.03401 1.899C1.375 2.55801 1.375 3.61867 1.375 5.73999V7.98999Z" stroke="#626262" strokeWidth="1.125"/>
              <path d="M7.9375 16.24C7.9375 16.5507 8.18934 16.8025 8.5 16.8025C8.81066 16.8025 9.0625 16.5507 9.0625 16.24L7.9375 16.24ZM8.5 12.49L7.9375 12.49L7.9375 16.24L8.5 16.24L9.0625 16.24L9.0625 12.49L8.5 12.49Z" fill="#626262"/>
              <path d="M4.75 16.24L8.50005 13.99L12.25 16.24" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>TV</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M0.875 7.73999C0.875 4.38123 0.875 2.70185 1.91843 1.65842C2.96186 0.61499 4.64124 0.61499 8 0.61499C11.3588 0.61499 13.0381 0.61499 14.0816 1.65842C15.125 2.70185 15.125 4.38123 15.125 7.73999C15.125 11.0987 15.125 12.7781 14.0816 13.8216C13.0381 14.865 11.3588 14.865 8 14.865C4.64124 14.865 2.96186 14.865 1.91843 13.8216C0.875 12.7781 0.875 11.0987 0.875 7.73999Z" stroke="#626262" strokeWidth="1.125"/>
              <path d="M5 6.47516C5.86163 5.85208 6.89065 5.48999 7.99592 5.48999C9.10468 5.48999 10.1367 5.85437 11 6.48107M9.63069 8.48999C9.13862 8.21724 8.58343 8.06378 7.99592 8.06378C7.41137 8.06378 6.85881 8.2157 6.36858 8.48589" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
              <path d="M8 10.74H8.00476" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>WIFI</span>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-sm text-gray-600 mr-2">Guests:</span>
          <User className="w-4 h-4 text-gray-600" />
          <User className="w-4 h-4 text-gray-600" />
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-xl font-bold text-gray-900">$282</div>
            <div className="text-sm text-gray-600">for 1 week</div>
            <div className="text-sm text-green-600 mt-1">✓ Breakfast included</div>
            <div className="text-sm text-red-600 font-medium">Only 4 rooms left</div>
          </div>
          <div className="text-right">
            <div className="mb-2">
              <label className="block text-xs text-gray-600 mb-1">Rooms</label>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm w-16">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <Button className="bg-[#007DD0] hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm">
              Reserve
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Card>

  {/* Third Room - Mobile */}
  <Card className="p-4">
    <div className="space-y-4">
      <div>
        <h3 className="font-medium text-[#007DD0] mb-2">Deluxe Double Room</h3>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M16 11.865H1" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 14.49V10.74C16 9.32578 16 8.61867 15.5607 8.17933C15.1213 7.73999 14.4142 7.73999 13 7.73999H4C2.58579 7.73999 1.87868 7.73999 1.43934 8.17933C1 8.61867 1 9.32578 1 10.74V14.49" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.5 7.73999V6.70335C11.5 6.32271 11.4313 6.1954 11.0797 6.04537C10.3473 5.73291 9.45838 5.48999 8.5 5.48999C7.54162 5.48999 6.65266 5.73291 5.9203 6.04537C5.56865 6.1954 5.5 6.32271 5.5 6.70335L5.5 7.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              <path d="M14.5 7.73999V4.26042C14.5 3.74168 14.5 3.48232 14.3719 3.23738C14.2438 2.99245 14.0613 2.86567 13.6963 2.61211C12.2246 1.58982 10.4329 0.98999 8.5 0.98999C6.56711 0.98999 4.77543 1.58982 3.30372 2.61211C2.93869 2.86567 2.75618 2.99245 2.62809 3.23738C2.5 3.48232 2.5 3.74168 2.5 4.26042V7.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
            </svg>
            <span>2 single beds</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path d="M3.25 15.74H2.875V16.115H3.25V15.74ZM7.26517 12.2552C7.41161 12.1087 7.41161 11.8713 7.26517 11.7248C7.11872 11.5784 6.88128 11.5784 6.73483 11.7248L7.26517 12.2552ZM3.25 11.24H2.875V15.74H3.25H3.625V11.24H3.25ZM3.25 15.74V16.115H7.75V15.74V15.365H3.25V15.74ZM3.25 15.74L3.51516 16.0052L7.26517 12.2552L7 11.99L6.73483 11.7248L2.98484 15.4748L3.25 15.74Z" fill="#626262" />
              <path d="M15.25 3.73999H15.625V3.36499H15.25V3.73999ZM11.2348 7.22483C11.0884 7.37127 11.0884 7.60871 11.2348 7.75516C11.3813 7.9016 11.6187 7.9016 11.7652 7.75516L11.2348 7.22483ZM15.25 8.23999H15.625V3.73999H15.25H14.875V8.23999H15.25ZM15.25 3.73999V3.36499H10.75V3.73999V4.11499H15.25V3.73999ZM15.25 3.73999L14.9848 3.47483L11.2348 7.22483L11.5 7.48999L11.7652 7.75516L15.5152 4.00516L15.25 3.73999Z" fill="#626262" />
            </svg>
            <span>1200 sq ft</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M1 3.19607C3.625 5.76984 7.43162 4.6668 8.29933 3.19607C8.42695 2.97975 8.5 2.7286 8.5 2.46071C8.5 1.64846 7.82843 0.98999 7 0.98999C6.17157 0.98999 5.5 1.64846 5.5 2.46071" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              <path d="M12.25 5.43609C12.25 4.22322 13.0895 3.23999 14.125 3.23999C15.1605 3.23999 16 4.22322 16 5.43609C16 5.97389 15.835 6.46653 15.561 6.84833C14.0097 9.38363 6.4573 8.42728 2.5 7.6322" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              <path d="M9.31403 13.6555C9.46847 14.1417 9.88518 14.49 10.375 14.49C10.9963 14.49 11.5 13.9296 11.5 13.2382C11.5 13.0032 11.4418 12.7833 11.3405 12.5953C10.3749 10.7343 5.49997 9.48292 1 12.821" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              <path d="M13.75 10.365H15.25" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Air condition</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
              <path d="M3.75 11.74L3.125 12.365M11.25 11.74L11.875 12.365" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
              <path d="M1.875 6.73999V7.36499C1.875 9.42738 1.875 10.4586 2.5157 11.0993C3.15641 11.74 4.18761 11.74 6.25 11.74H8.75C10.8124 11.74 11.8436 11.74 12.4843 11.0993C13.125 10.4586 13.125 9.42738 13.125 7.36499V6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1.25 6.73999L13.75 6.73999" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" />
              <path d="M2.5 6.73999V2.69212C2.5 1.82109 3.2061 1.11499 4.07713 1.11499C4.77604 1.11499 5.39159 1.57498 5.58962 2.24524L5.625 2.36499" stroke="#626262" strokeWidth="0.75" strokeLinecap="round" />
              <path d="M5 2.98999L6.5625 1.73999" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" />
            </svg>
            <span>Bathroom</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M1.375 7.98999C1.375 10.1113 1.375 11.172 2.03401 11.831C2.69302 12.49 3.75368 12.49 5.875 12.49H11.125C13.2463 12.49 14.307 12.49 14.966 11.831C15.625 11.172 15.625 10.1113 15.625 7.98999V5.73999C15.625 3.61867 15.625 2.55801 14.966 1.899C14.307 1.23999 13.2463 1.23999 11.125 1.23999H5.875C3.75368 1.23999 2.69302 1.23999 2.03401 1.899C1.375 2.55801 1.375 3.61867 1.375 5.73999V7.98999Z" stroke="#626262" strokeWidth="1.125"/>
              <path d="M7.9375 16.24C7.9375 16.5507 8.18934 16.8025 8.5 16.8025C8.81066 16.8025 9.0625 16.5507 9.0625 16.24L7.9375 16.24ZM8.5 12.49L7.9375 12.49L7.9375 16.24L8.5 16.24L9.0625 16.24L9.0625 12.49L8.5 12.49Z" fill="#626262"/>
              <path d="M4.75 16.24L8.50005 13.99L12.25 16.24" stroke="#626262" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>TV</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M0.875 7.73999C0.875 4.38123 0.875 2.70185 1.91843 1.65842C2.96186 0.61499 4.64124 0.61499 8 0.61499C11.3588 0.61499 13.0381 0.61499 14.0816 1.65842C15.125 2.70185 15.125 4.38123 15.125 7.73999C15.125 11.0987 15.125 12.7781 14.0816 13.8216C13.0381 14.865 11.3588 14.865 8 14.865C4.64124 14.865 2.96186 14.865 1.91843 13.8216C0.875 12.7781 0.875 11.0987 0.875 7.73999Z" stroke="#626262" strokeWidth="1.125"/>
              <path d="M5 6.47516C5.86163 5.85208 6.89065 5.48999 7.99592 5.48999C9.10468 5.48999 10.1367 5.85437 11 6.48107M9.63069 8.48999C9.13862 8.21724 8.58343 8.06378 7.99592 8.06378C7.41137 8.06378 6.85881 8.2157 6.36858 8.48589" stroke="#626262" strokeWidth="1.125" strokeLinecap="round"/>
              <path d="M8 10.74H8.00476" stroke="#626262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>WIFI</span>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-sm text-gray-600 mr-2">Guests:</span>
          <User className="w-4 h-4 text-gray-600" />
          <User className="w-4 h-4 text-gray-600" />
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-xl font-bold text-gray-900">$282</div>
            <div className="text-sm text-gray-600">for 1 week</div>
            <div className="text-sm text-green-600 mt-1">✓ Breakfast included</div>
            <div className="text-sm text-red-600 font-medium">Only 4 rooms left</div>
          </div>
          <div className="text-right">
            <div className="mb-2">
              <label className="block text-xs text-gray-600 mb-1">Rooms</label>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm w-16">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <Button className="bg-[#007DD0] hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm">
              Reserve
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Card>
</div>


    </div>
  );
}
