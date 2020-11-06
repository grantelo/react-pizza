const initialState = {
    items: {},
    totalCount: 0,
    totalPrice: 0,
}

const getTotalItemPrice = (arr) => {
    return arr[0].price * arr.length
}

const getCountItems = (items) => items.length > 1

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART': {
            const currentPizzaItems = !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id].items, action.payload]
            const currentPizzaPrice = !state.items[action.payload.id] ? action.payload.price : state.items[action.payload.id].totalPrice + action.payload.price
            //const currentPizzaCount = !state.items[action.payload.id] ? 1 : state.items[action.payload.id].totalCount + 1

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: currentPizzaPrice,
                    //totalCount: currentPizzaCount
                }
            }
            return {
                ...state,
                items: newItems,
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + action.payload.price
            }
        }

        case 'CLEAR_CART': {
            return {
                items: {},
                totalCount: 0,
                totalPrice: 0,
            }
        }

        case 'REMOVE_CART_ITEM': {
            const newItems = {
                ...state.items
            }
            const totalCountItem = newItems[action.payload].items.length;
            const totalPriceItem = newItems[action.payload].totalPrice;
            
            delete newItems[action.payload];

            return {
                items: newItems,
                totalCount: state.totalCount - totalCountItem,
                totalPrice: state.totalPrice - totalPriceItem
            }
        }

        case 'PLUS_CART_ITEM': {
            const newObjItem = [...state.items[action.payload].items, state.items[action.payload].items[0]];
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItem,
                    totalPrice: getTotalItemPrice(newObjItem)
                } 
            }
            const totalPrice= state.totalPrice + newObjItem[0].price;
            const totalCount = state.totalCount + 1;
            return {
                ...state,
                items: {
                    ...newItems
                },
                totalPrice,
                totalCount
            }
        }

        case 'MINUS_CART_ITEM': {
            const oldItem = state.items[action.payload].items;
            const newObjItem = getCountItems(oldItem) ? oldItem.slice(1) : oldItem;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItem,
                    totalPrice: getTotalItemPrice(newObjItem)
                }
            }
            const totalPrice = getCountItems(oldItem) ? state.totalPrice - newObjItem[0].price : state.totalPrice;
            const totalCount = getCountItems(oldItem) ? state.totalCount - 1 : state.totalCount;

            return {
                items: newItems,
                totalCount,
                totalPrice
            }
        }
    }

    return state
}

export default cart