import React, { useState } from 'react';
import { Separator } from './ui/separator';
import { LuFuel } from "react-icons/lu";
import { TbBrandSpeedtest } from "react-icons/tb";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import whats from "../../images/whatsapp.png";

function CarItem({ car }) {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = (e) => {
    e.stopPropagation(); // Prevents the event from bubbling up and triggering the parent click event
    setShowPopup(true); // Show the popup when clicking the WhatsApp button
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="z-[0] rounded-xl bg-white border hover:shadow-md cursor-pointer relative p-2">
      {/* Image */}
      <img 
        src={car?.images[0]?.imageUrl} 
        width={'100%'} 
        height={250} 
        className="rounded-t-xl h-[180px] object-cover z-0"
      />

      <div className="p-4 z-0">
        <Link to={'/listing-details/' + car?.id} className="z-0">
          <h2 className="font-bold text-black text-lg mb-2 z-0">{car?.listingTitle}</h2>
        </Link>
        <Separator className="z-0" />

        {/* Grid Layout */}
        <div className="grid grid-cols-3 mt-5 gap-4 z-0">
          <div className="flex flex-col items-center z-0">
            <LuFuel className="text-lg mb-2 z-0" />
            <h2 className="z-0">{car?.mileage} Kms</h2>
          </div>
          <div className="flex flex-col items-center z-0">
            <TbBrandSpeedtest className="text-lg mb-2 z-0" />
            <h2 className="z-0">{car?.fuelType}</h2>
          </div>
          <div className="flex flex-col items-center z-0">
            <GiGearStickPattern className="text-lg mb-2 z-0" />
            <h2 className="z-0">{car?.transmission}</h2>
          </div>
        </div>

        <Separator className="my-2 z-0" />

        <div className="flex items-center justify-between px-2 z-99">
          <button 
            onClick={handlePopup} // Only trigger popup when this button is clicked
            className="bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600 transition-all flex items-center justify-center z-0"
          >
            <img src={whats} alt="WhatsApp" width={30} height={30} className="z-0" />
          </button>
          <Link to={'/listing-details/' + car?.id} className="text-primary text-sm flex gap-2 items-center z-0">
            View Details <MdOpenInNew className="z-[-1]" />
          </Link>
        </div>
      </div>

      {/* Pop-up Modal */}
      {showPopup && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99]"
          onClick={closePopup} // Close popup when clicking outside the modal
        >
          <div 
            className="bg-white p-6 rounded-lg w-full max-w-xs md:max-w-sm z-0"
            onClick={(e) => e.stopPropagation()} // Prevents closing popup when clicking inside modal
          >
            <h2 className="text-lg font-bold text-center mb-4 z-0">Contact Us</h2>
            <div className="flex flex-col gap-4 z-0">
              <a 
                href="https://wa.me/9025760713" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition-all z-0"
              >
                <FaWhatsapp className="text-xl z-0" /> WhatsApp: +91 9025760713
              </a>
              <button
                onClick={() => window.location.href = "tel:9025760713"}
                className="flex items-center gap-3 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all z-0"
              >
                <IoIosCall className="text-xl z-0" /> Call: +91 9025760713
              </button>
            </div>
            <button 
              onClick={closePopup} 
              className="mt-4 w-full text-center bg-gray-300 hover:bg-gray-400 p-2 rounded-md transition-all z-0"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarItem;
