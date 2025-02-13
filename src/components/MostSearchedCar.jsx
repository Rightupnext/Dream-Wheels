import React, { useEffect, useState } from 'react';
import { db } from './../../configs';
import { CarImages, CarListing } from './../../configs/schema';
import { desc, eq } from 'drizzle-orm';
import Service from '@/Shared/Service';
import CarItem from './CarItem';

function MostSearchedCar() {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    GetAllCarList();
  }, []);

  const GetAllCarList = async () => {
    try {
      const result = await db.select()
        .from(CarListing)
        .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId)) // Joining car images
        .orderBy(desc(CarListing.id)); // Fetch all cars, sorted by latest first

      const resp = Service.FormatResult(result);
      console.log("Fetched Cars:", resp);
      setCarList(resp);
    } catch (error) {
      console.error("Error fetching car list:", error);
    }
  };

  return (
    <div className='mx-4 md:mx-5'>
      <h2 className="text-lg text-center mt-20 mb-2 hidden sm:block">
  Buy and Sell Used Cars & Bikes
</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {carList.length > 0 ? (
          carList.map((car, index) => (
            <div key={index} className='shadow-md rounded-2xl p-4 bg-white'>
              <CarItem car={car} />
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No cars available</p>
        )}
      </div>
    </div>
  );
}

export default MostSearchedCar;
