import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';

const Loader = () => (
  <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f010f] text-white transition-opacity duration-700">
    <Image src={logo} alt="Logo" width={120} height={120} className="animate-bounce mb-4" />
    <span className="text-xl font-bold tracking-widest">Hi there, just a moment pls</span>
  </div>
);

export default Loader;
