

export const initialState = {
    basket: [],
    user: null,
};


export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);


function reducer(state, action) {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':

            return { ...state, user: action.user, }
        case 'ADD':
            return { ...state, basket: [...state.basket, action.item], }

        case 'REMOVE':

            let newBasket = [...state.basket];
            const indx = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (indx >= 0) {
                newBasket.splice(indx, 1);

            }
            else {
                console.warn(`Can't Remove product (id:${action.id} as it's not found.)`);
            }

            return { ...state, basket: newBasket };

        default:
            return state;
    }
}

export default reducer;