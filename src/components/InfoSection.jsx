import React from 'react';

function InfoSection() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-screen">
          
          {/* Left Section - Image */}
          <div className="lg:py-16">
            <div className="h-64 sm:h-80 lg:h-full">
              <img
                alt="Luxury Car"
                src="https://hips.hearstapps.com/hmg-prod/images/rt-mercedes-benz-cpo-1-1531414981.jpg?crop=1.00xw:0.755xh;0,0.169xh&resize=640:*"
                className="h-full w-full object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="flex items-center bg-[#e73030] rounded-3xl h-full p-8 sm:p-16 lg:p-24">
            <div>
              <h2 className="text-lg font-bold sm:text-2xl text-black">
                Why Choose Dream Wheel Motors?
              </h2>
              <p className="mt-2 text-black font-medium">
                At Dream Wheel Motors, our mission is to make your car-buying experience seamless, secure, and satisfying.
              </p>

              <ul className="mt-6 space-y-3 text-white font-bold">
                <li>🚗 Certified Pre-Owned Cars</li>
                <li>⛓️ Safety First, Always</li>
                <li>💸 Flexible Financing Options</li>
                <li>📅 Easy Trade-In & Instant Valuation</li>
              </ul>

              <p className="mt-4 text-white font-bold text-sm">
                🌟 Your Journey Begins Here. Your Dream, Our Wheels. 🌟
              </p>

              <a
                href="https://wa.me/9025760713"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded border border-[#d90429] bg-black px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
