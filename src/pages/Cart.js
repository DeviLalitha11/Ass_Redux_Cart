import React, { useState, useEffect } from 'react';
import store from '../reduxStore/store';
import toast, { Toaster } from 'react-hot-toast';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(store.getState().cart);
        const unsubscribe = store.subscribe(() => {
            setCartItems(store.getState().cart);
        });
        return () => unsubscribe();
    }, []);

    const handleRemoveFromCart = (id) => {
        store.dispatch({
            type: 'remove',
            payload: id
        });
        setTimeout(() => {
            setCartItems(store.getState().cart);
            toast.success('Item removed from cart');
        }, 1000);
    };

    return (
        <div className='p-6'>
            <Toaster />
            <h1 className='text-3xl font-bold mb-4'>Cart</h1>
            {cartItems.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {cartItems.map((item, index) => (
                        <div key={index} className='flex flex-col rounded-lg shadow-lg p-4'>
                            <img src={item.image} alt={item.title} className='w-full h-48 object-cover rounded-lg mb-2' />
                            <h2 className='font-semibold text-2xl'>{item.title}</h2>
                            <p className='text-base'>Price: ${item.price}</p>
                            <button
                                onClick={() => handleRemoveFromCart(item.id)}
                                className='mt-auto bg-red-500 rounded-lg p-2 text-white'
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
