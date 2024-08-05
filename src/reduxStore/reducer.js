const initialState = {
    cart: [],
    favourites: []
};

export default function reducer(state = initialState, action) {
    if (action.type === 'add') {
        return { ...state, cart: [...state.cart, action.payload] };
    } else if (action.type === 'remove') {
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    } else if (action.type === 'add_favourite') {
        return { ...state, favourites: [...state.favourites, action.payload] };
    } else {
        return state;
    }
}
