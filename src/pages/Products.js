import React, { useEffect, useState } from 'react';
import store from '../reduxStore/store';
import toast, { Toaster } from 'react-hot-toast';

const Products = () => {
    const [posts, setPosts] = useState([]);
    const [addedToCart, setAddedToCart] = useState({});
    const [favourites, setFavourites] = useState({});

    useEffect(() => {
        async function fetchingData() {
            const result = await fetch("https://dummyjson.com/products");
            const actualData = await result.json();
            setPosts(actualData.products);
        }
        fetchingData();
    }, []);

    const handleAddToCart = (product) => {
        store.dispatch({
            type: 'add',
            payload: { id: product.id, title: product.title, price: product.price, image: product.thumbnail }
        });
        setAddedToCart({ ...addedToCart, [product.id]: true });
        toast.success('Item added successfully');
        console.log('Cart state after adding:', store.getState().cart);
    };

    const handleAddToFavourites = (product) => {
        store.dispatch({
            type: 'add_favourite',
            payload: { id: product.id, title: product.title, price: product.price, image: product.thumbnail }
        });
        setFavourites({ ...favourites, [product.id]: true });
        toast.success('Item added to favourites');
    };

    return (
        <div className='grid grid-cols-4 justify-items-center gap-2 bg-slate-200'>
            <Toaster />
            {posts.map((product) => (
                <div key={product.id} className='flex flex-col rounded-xl shadow-lg w-96 h-full m-1 p-3'>
                    <img src={product.thumbnail} alt={product.title} className='w-full h-48 object-cover rounded-lg mb-2' />
                    <h2 className='font-semibold text-2xl text-red-500'>{product.title}</h2>
                    <p className='text-base text-slate-900'>{product.description}</p>
                    <p className='text-base text-slate-900'>Price: ${product.price}</p>
                    <div className='flex items-center justify-between mt-auto'>
                        <button
                            onClick={() => handleAddToCart(product)}
                            className={`rounded-lg p-2 text-white ${addedToCart[product.id] ? 'bg-green-500' : 'bg-blue-500'} hover:bg-blue-700`}
                            disabled={addedToCart[product.id]}
                        >
                            {addedToCart[product.id] ? 'Added To Cart' : 'Add To Cart'}
                        </button>
                        <svg
                            onClick={() => handleAddToFavourites(product)}
                            className={`w-6 h-6 cursor-pointer ${favourites[product.id] ? 'text-red-500' : 'text-gray-500'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3.172 3.172a4.001 4.001 0 015.656 0L10 4.343l1.172-1.171a4.001 4.001 0 115.656 5.656l-6.707 6.707a1 1 0 01-1.414 0L3.172 8.828a4.001 4.001 0 010-5.656z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
