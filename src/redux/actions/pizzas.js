export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false));
    fetch(
            `http://localhost:3001/pizzas?${category !==null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`,
        )
        .then((response) => response.json())
        .then((resolve) => dispatch(setPizzas(resolve)));
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload,
})