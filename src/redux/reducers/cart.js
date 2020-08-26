const initialState = {
    items: {},
    totalCount: 0,
    totalPrice: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART': {
            const currentPizzaItems = !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id].items, action.payload]
            const currentPizzaPrice = !state.items[action.payload.id] ? action.payload.price : state.items[action.payload.id].totalPrice + action.payload.price
            const currentPizzaCount = !state.items[action.payload.id] ? 1 : state.items[action.payload.id].totalCount + 1

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: currentPizzaPrice,
                    totalCount: currentPizzaCount
                }
            }
            return {
                ...state,
                items: newItems,
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + action.payload.price
            }
        }
    }

    return state
}

export default cart