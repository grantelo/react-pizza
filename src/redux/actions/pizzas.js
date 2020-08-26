export const fetchPizzas = (category, sortBy) => (dispatch) => {
    fetch(
            `http://localhost:3006/pizzas?${category !==null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`,
        )
        .then((response) => response.json())
        .then((resolve) => dispatch(setPizzas(resolve)));
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});