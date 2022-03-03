// Actions

import { CartItemType } from '../reducer/addReducer'

export const RemoveFromCart = (id: any) => {
    return (dispatch: any) => {
        dispatch({
            type: "RemoveFromCart",
            payload: id
        });
    };
};

export const AddToCart = (item: CartItemType) => {
    return (dispatch: any) => {
        dispatch({
            type: "AddToCart",
            payload: item
        });
    };
};

export const GetTotalItems = (CartItems: any) => {
    console.log('CartItems: ', CartItems)
    return (dispatch: any) => {
        dispatch({
            type: 'CartItems',
            payload: CartItems
        })
    }
}
