// Single Reducer

export type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
};

interface ActionName {
    type: string,
    payload: any
}

// const RemoveCart = (id: number) => {
//     (prev: CartItemType[]) =>
//         prev.reduce((ack: CartItemType[], item: CartItemType) => {
//             if (item.id === id) {
//                 if (item.amount === 1) return ack;
//                 return [...ack, { ...item, amount: item.amount - 1 }];
//             } else return [...ack, item];
//         }, [])
// }

// const AddCart = (clickedItem: any) => {
//     (prev: CartItemType[]) => {
//         const isItemInCart = prev.find((item: CartItemType) => item.id === clickedItem.id);
//         if (isItemInCart)
//             return prev.map((item: CartItemType) => item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item);
//         return [...prev, { ...clickedItem, amount: 1 }];
//     }
// }


export const reducer = (state = 0, action: ActionName) => {
    // console.log('state: ', state)
    // console.log('action: ', action)
    switch (action.type) {
        // case "RemoveFromCart": return RemoveCart(action.payload);
        // case "AddToCart": return AddCart(action.payload);
        case 'CartItems': return action.payload.reduce((ack: number, item: CartItemType) => ack + item.amount, 0)
        default: return state;
    }
};
