const ReducerLoading = (state = true, action) => {
    switch (action.type) {
        case 'loading':
            return state = action.payload;

        default:
            return state;
    }
}

export default ReducerLoading;