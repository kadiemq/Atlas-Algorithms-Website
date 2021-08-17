export const Loading = (bool) => {
    return (dispatch) => {
        dispatch({
            type: 'loading',
            payload: bool
        })
    }
}