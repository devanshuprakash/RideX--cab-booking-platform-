import React from 'react';
import { Link } from 'react-router-dom';

const Price = () => {
  const rideTypes = [
    {
      id: 1,
      name: 'RideX Mini',
      price: '₹149',
      eta: '4 mins',
      capacity: 4,
      image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d8091c5d/original/Final_UberX.png',
      desc: 'Affordable, compact rides for everyday travel.'
    },
    {
      id: 2,
      name: 'RideX Sedan',
      price: '₹210',
      eta: '6 mins',
      capacity: 4,
      image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1555367538/assets/31/ad23e2-f947-4763-9a03-ad7b709bb959/original/Uber_ConfirmPickup.png',
      desc: 'Extra comfort and more legroom for a smooth ride.'
    },
    {
      id: 3,
      name: 'RideX Lux',
      price: '₹450',
      eta: '8 mins',
      capacity: 4,
      image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1591274432/assets/20/ad3eb3-9529-450a-995c-550974447385/original/UberBlackXL.png',
      desc: 'Top-tier luxury vehicles with professional captains.'
    }
  ];

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      {/* Header */}
      <div className='p-6 flex items-center justify-between bg-white shadow-sm'>
        <Link to='/' className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className='text-xl font-bold tracking-tight'>Choose a Ride</h1>
        <div className='w-10'></div> {/* Spacer */}
      </div>

      {/* Main Content */}
      <div className='flex-1 p-6 space-y-6'>
        <div className='space-y-1'>
          <h2 className='text-3xl font-black text-gray-900 italic tracking-tighter'>
            Ride<span className='text-yellow-500'>X</span> Estimator
          </h2>
          <p className='text-gray-500 font-medium'>Predictable pricing for your destination</p>
        </div>

        <div className='grid gap-4'>
          {rideTypes.map((ride) => (
            <div 
              key={ride.id} 
              className='bg-white p-4 rounded-3xl border-2 border-transparent hover:border-black transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl group'
            >
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                  <div className='w-24 h-16 flex-shrink-0'>
                    <img src={ride.image} alt={ride.name} className='w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500' />
                  </div>
                  <div>
                    <div className='flex items-center space-x-2'>
                      <h3 className='text-xl font-bold text-gray-900'>{ride.name}</h3>
                      <span className='flex items-center text-xs font-bold bg-gray-100 px-2 py-1 rounded-lg text-gray-600'>
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        {ride.capacity}
                      </span>
                    </div>
                    <p className='text-sm text-gray-500 font-medium'>{ride.eta} away</p>
                    <p className='text-xs text-gray-400 mt-1 line-clamp-1'>{ride.desc}</p>
                  </div>
                </div>
                <div className='text-right'>
                  <p className='text-2xl font-black text-gray-900'>{ride.price}</p>
                  <p className='text-xs text-gray-400 font-bold uppercase tracking-wider'>Est. Fare</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Button */}
      <div className='p-6 bg-white border-t border-gray-100'>
        <button className='w-full bg-black text-white py-4 rounded-2xl text-xl font-bold tracking-tight hover:bg-gray-800 transition-colors shadow-lg active:scale-95'>
          Confirm Ride Selection
        </button>
      </div>
    </div>
  );
};

export default Price;
