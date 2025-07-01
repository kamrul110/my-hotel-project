import React from 'react';

export default function HotelPolicies() {
  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Policies</h2>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {/* Check-in */}
        <div className="flex border-b">
          <div className="w-1/3 p-6">
            <h3 className="font-medium">Check-in</h3>
          </div>
          <div className="w-2/3 p-6">
            <p className="font-medium mb-2">Available 24 hours</p>
            <p className="text-sm text-gray-600 mb-1">Guests are required to show a photo identification and credit card upon check-in</p>
            <p className="text-sm text-gray-600">You'll need to let the property know in advance what time you'll arrive.</p>
          </div>
        </div>

        {/* Check-out */}
        <div className="flex border-b">
          <div className="w-1/3 p-6">
            <h3 className="font-medium">Check-out</h3>
          </div>
          <div className="w-2/3 p-6">
            <p className="font-medium">Available 24 hours</p>
          </div>
        </div>

        {/* Cancellation */}
        <div className="flex border-b">
          <div className="w-1/3 p-6">
            <h3 className="font-medium">Cancellation/ prepayment</h3>
          </div>
          <div className="w-2/3 p-6">
            <p className="text-sm text-gray-600 mb-2">Cancellation and prepayment policies vary according to accommodation type.</p>
            <p className="text-sm text-gray-600">Please check what conditions may apply to each option when making your selection.</p>
          </div>
        </div>

        {/* Children and beds */}
        <div className="flex border-b">
          <div className="w-1/3 p-6">
            <h3 className="font-medium">Children and beds</h3>
          </div>
          <div className="w-2/3 p-6">
            <p className="font-medium mb-2">Child policies</p>
            <p className="text-sm text-gray-600 mb-1">Children of any age are welcome.</p>
            <p className="text-sm text-gray-600 mb-1">Children 12 years and above will be charged as adults at this property.</p>
            <p className="text-sm text-gray-600 mb-3">To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.</p>
            
            <p className="font-medium mb-2">Cot and extra bed policies</p>
            <p className="text-sm text-gray-600 mb-1">The number of extra beds allowed is dependent on the option you choose.</p>
            <p className="text-sm text-gray-600 mb-1">Please check your selected option for more information.</p>
            <p className="text-sm text-gray-600 mb-1">There are no cots available at this property.</p>
            <p className="text-sm text-gray-600">All extra beds are subject to availability.</p>
          </div>
        </div>

        {/* No age restriction */}
        <div className="flex border-b">
          <div className="w-1/3 p-6">
            <h3 className="font-medium">No age restriction</h3>
          </div>
          <div className="w-2/3 p-6">
            <p className="text-sm text-gray-600">There is no age requirement for check-in</p>
          </div>
        </div>

        {/* Pets */}
        <div className="flex border-b">
          <div className="w-1/3 p-6">
            <h3 className="font-medium">Pets</h3>
          </div>
          <div className="w-2/3 p-6">
            <p className="text-sm text-gray-600">Pets are not allowed.</p>
          </div>
        </div>

        {/* Cash only */}
        <div className="flex">
          <div className="w-1/3 p-6">
            <h3 className="font-medium">Cash only</h3>
          </div>
          <div className="w-2/3 p-6">
            <p className="text-sm text-gray-600">This property only accepts cash payments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}