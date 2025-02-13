import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react';
import { db } from './../../../configs';
import { CarImages, CarListing } from './../../../configs/schema';
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '@/Shared/Service';
import CarItem from '@/components/CarItem';
import { FaTrashAlt } from "react-icons/fa";
import { toast } from 'react-hot-toast';

function MyListing() {
    const { user } = useUser();
    const [carList, setCarList] = useState([]);

    useEffect(() => {
        if (user) GetUserCarListing();
    }, [user]);

    const GetUserCarListing = async () => {
        try {
            const result = await db.select()
                .from(CarListing)
                .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
                .where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
                .orderBy(desc(CarListing.id));

            const resp = Service.FormatResult(result);
            setCarList(resp);
        } catch (error) {
            console.error("Error fetching user listings:", error);
        }
    };

    const handleDelete = async (carId) => {
        if (!window.confirm("Are you sure you want to delete this listing?")) return;

        try {
            // Delete associated images first (if needed)
            await db.delete(CarImages).where(eq(CarImages.carListingId, carId));

            // Then delete the car listing
            await db.delete(CarListing).where(eq(CarListing.id, carId));

            toast.success("Car listing deleted successfully!");
            
            // Refresh the listing
            setCarList((prevList) => prevList.filter((car) => car.id !== carId));
        } catch (error) {
            console.error("Error deleting car listing:", error);
            toast.error("Failed to delete the listing!");
        }
    };

    return (
        <div className='mt-6'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-4xl'>My Listing</h2>
                <Link to={'/add-listing'}>
                    <Button>+ Add New Listing</Button>
                </Link>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5'>
                {carList.length > 0 ? (
                    carList.map((item, index) => (
                        <div key={index}>
                            <CarItem car={item} />
                            <div className='p-2 bg-gray-50 rounded-lg flex justify-between gap-3'>
                                <Link to={'/add-listing?mode=edit&id=' + item?.id} className='w-full'>
                                    <Button variant="outline" className="w-full">Edit</Button>
                                </Link>
                                <Button 
                                    variant="destructive" 
                                    onClick={() => handleDelete(item.id)}
                                >
                                    <FaTrashAlt />
                                </Button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 col-span-full text-center">No listings found</p>
                )}
            </div>
        </div>
    );
}

export default MyListing;
