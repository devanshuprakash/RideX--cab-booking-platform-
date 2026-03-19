import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';

const Home = () => {
  return (
    <div 
      className='h-screen flex flex-col justify-between w-full bg-cover bg-center transition-all duration-700 ease-in-out'
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className='p-8'>
        <h1 className='text-4xl font-black text-white tracking-tighter drop-shadow-2xl italic'>
          Ride<span className='text-yellow-400'>X</span>
        </h1>
      </div>

      <div className='bg-white/90 backdrop-blur-md py-10 px-8 pb-12 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] transform transition-all duration-500 hover:bg-white'>
        <div className='space-y-2 mb-8'>
          <h2 className='text-4xl font-extrabold text-gray-900 leading-tight'>
            Move with <br/> Confidence
          </h2>
          <p className='text-gray-600 text-lg font-medium'>
            The smartest way to navigate your city.
          </p>
        </div>

        <Link 
          to='/login' 
          className='flex items-center justify-center w-full bg-black text-white py-4 rounded-2xl text-xl font-bold tracking-tight transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02] active:scale-95 shadow-xl hover:shadow-2xl'
        >
          Get Started
          <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
          </svg>
        </Link>
        
        <div className='mt-6 flex justify-center'>
            <p className='text-gray-400 text-sm font-semibold uppercase tracking-widest'>Premium Cab Service</p>
        </div>
      </div>
    </div>
  );
};

export default Home;