'use client';

import Image from 'next/image';
import { Calendar, Users, ChevronDown,Home,User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Room } from '@/types/hotel';

interface RoomListingProps {
  rooms: Room[];
}

export default function RoomListing({ rooms }: RoomListingProps) {
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

      {/* Room Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
          {/* Table Header */}
          <thead className="bg-[#007DD0] text-white">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Room type</th>
              <th className="px-4 py-3 text-left font-medium">Number of guests</th>
              <th className="px-4 py-3 text-left font-medium">Price for 1 week</th>
              <th className="px-4 py-3 text-left font-medium">Your choices</th>
              <th className="px-4 py-3 text-left font-medium">Select rooms</th>
              <th className="px-4 py-3 text-left font-medium">Your choices</th>
            </tr>
          </thead>
          
          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {/* Twin Room */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-6 border-r border-gray-200 align-top">
                <div>
                  <h3 className="font-medium text-blue-600 mb-2">Twin Room</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>🛏️ 2 single beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🏠 Room</span>
                      <span className="ml-2">📏 1200 sq ft</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>❄️ Air condition</span>
                      <span className="ml-4">🚿 Bathroom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📺 TV</span>
                      <span className="ml-4">📶 WIFI</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-6 border-r border-gray-200 align-top">
                <div className="flex items-start justify-start">
                  <User className="w-5 h-5 text-gray-600" />
                  <User className="w-5 h-5 text-gray-600" />
                 
                </div>
              </td>
              <td className="px-4 py-6 border-r border-gray-200 align-top">
                <div className="text-xl font-bold">$282</div>
              </td>
              <td className="px-4 py-6 border-r border-gray-200 align-top">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Breakfast included</div>
                  <div className="text-sm text-red-600 font-medium">Only 4 rooms left</div>
                </div>
              </td>
              <td className="px-4 py-6 border-r border-gray-200 align-top">
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-300 rounded px-3 py-2 pr-8">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </td>
              <td className="px-4 py-6 align-top">
                <Button className="bg-[#007DD0] hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                  Reserve
                </Button>
              </td>
            </tr>

            {/* Deluxe Double Room */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-6 border-r border-gray-200 align-top">
                <div>
                  <h3 className="font-medium text-blue-600 mb-2">Deluxe Double Room</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>🛏️ 2 single beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🏠 Room</span>
                      <span className="ml-2">📏 1200 sq ft</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>❄️ Air condition</span>
                      <span className="ml-4">🚿 Bathroom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📺 TV</span>
                      <span className="ml-4">📶 WIFI</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-6 border-r border-gray-200 align-top">
                <div className="flex items-start justify-start">
                  <User className="w-5 h-5 text-gray-600" />
                  <User className="w-5 h-5 text-gray-600" />
                  
                </div>
              </td>
              <td className="px-4 py-6 border-r border-gray-200 align-top">
                <div className="text-xl font-bold">$282</div>
              </td>
              <td className="px-4 py-6 border-r border-gray-200 align-top">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Breakfast included</div>
                  <div className="text-sm text-red-600 font-medium">Only 4 rooms left</div>
                </div>
              </td>
              <td className="px-4 py-6   align-top">
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-300 rounded px-3 py-2 pr-8">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </td>
              <td className="px-4 py-6 align-top">
                <Button className="bg-[#007DD0] hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                  Reserve
                </Button>
              </td>
            </tr>

            {/* Third Room */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-6 border-r border-gray-200 align-top">
                <div>
                  <h3 className="font-medium text-blue-600 mb-2">Deluxe Double Room</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>🛏️ 2 single beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🏠 Room</span>
                      <span className="ml-2">📏 1200 sq ft</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>❄️ Air condition</span>
                      <span className="ml-4">🚿 Bathroom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📺 TV</span>
                      <span className="ml-4">📶 WIFI</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-6 border-r border-gray-200 align-top">
                <div className="flex items-start justify-start">
                  <User className="w-5 h-5 text-gray-600" />
                  <User className="w-5 h-5 text-gray-600" />
                 
                </div>
              </td>
              <td className="px-4 py-6 border-r border-gray-200 align-top">
                <div className="text-xl font-bold">$282</div>
              </td>
              <td className="px-4 py-6 border-r border-gray-200 align-top">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Breakfast included</div>
                  <div className="text-sm text-red-600 font-medium">Only 4 rooms left</div>
                </div>
              </td>
              <td className="px-4 py-6 border-gray-200 align-top">
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-300 rounded px-3 py-2 pr-8">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
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

      {/* Mobile Responsive Cards - Show on small screens */}
      <div className="md:hidden space-y-4">
        {/* Mobile Card 1 */}
        <Card className="p-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-blue-600 mb-2">Twin Room</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>2 single beds</div>
                <div>1200 sq ft</div>
                <div>Air condition</div>
                <div>Bathroom</div>
                <div>TV</div>
                <div>WIFI</div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xl font-bold">$282</div>
                <div className="text-sm text-gray-600">Breakfast included</div>
                <div className="text-sm text-red-600">Only 4 rooms left</div>
              </div>
              <div className="text-right">
                <select className="mb-2 border rounded px-2 py-1">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </select>
                <Button className="bg-[#007DD0] text-white w-full">Reserve</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
