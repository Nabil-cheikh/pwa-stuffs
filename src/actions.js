import * as CONST from './constants'

export const setSearchField = (text) => ({
    type: CONST.CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = () => (dispatch) => {
    dispatch({ type: CONST.REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: CONST.REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({type: CONST.REQUEST_ROBOTS_FAILED, payload: error}))
}