import React, { useState, useEffect } from 'react';
import store from '../reduxStore/store';

const Favourites = () => {
    const [favouriteItems, setFavouriteItems] = useState([]);

    useEffect(() => {
        setFavouriteItems(store.getState().favourites);
        const unsubscribe = store.subscribe(() => {
            setFavouriteItems(store.getState().favourites);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className='p-6'>
            <h1 className='text-3xl font-bold mb-4'>Favourites</h1>
            {favouriteItems.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {favouriteItems.map((item, index) => (
                        <div key={index} className='flex flex-col rounded-lg shadow-lg p-4'>
                            <img src={item.image} alt={item.title} className='w-full h-48 object-cover rounded-lg mb-2' />
                            <h2 className='font-semibold text-2xl'>{item.title}</h2>
                            <p className='text-base'>Price: ${item.price}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No items in favourites.</p>
            )}
        </div>
    );
};

export default Favourites;
