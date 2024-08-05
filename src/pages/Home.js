import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const showProducts = () => {
        navigate('/products');
    };

    const showCart = () => {
        navigate('/cart');
    };

    const showFavourites = () => {
        navigate('/favourites');
    };

    return (
        <div className='flex flex-col items-center mt-3 mb-3'>
            <div className='flex space-x-4'>
                <button onClick={showProducts} className='bg-blue-500 text-white p-4 rounded-lg text-xl'>Products</button>
                <button onClick={showCart} className='bg-blue-500 text-white p-4 rounded-lg text-xl'>Cart</button>
                <button onClick={showFavourites} className='bg-blue-500 text-white p-4 rounded-lg text-xl'>Favourites</button>
            </div>
        </div>
    );
};

export default Home;
