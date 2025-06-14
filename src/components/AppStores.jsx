import React from 'react'

export default function AppStores() {
  return (
    <>
        <div className="flex justify-center gap-4">
                <a href="#" class="bg-black rounded-lg p-2 flex items-center justify-center animate-fade-in-up delay-200">
                    <i className='bx bxl-apple text-white text-4xl'></i>            
                    <p className="text-white text-[10px] ml-2">
                        Download on the <br />
                        <span className="text-sm">App Store</span>
                    </p>
                </a>
                <a href="#" className="bg-black rounded-lg p-2 flex items-center justify-center animate-fade-in-up delay-400">
                    <i className='bx bxl-play-store text-white text-4xl'></i>            
                    <p className="text-white text-[10px] ml-2">
                        Get it on <br />
                        <span className="text-sm">Google Play</span>
                    </p>
                </a>
        </div>
    </>
  )
}
