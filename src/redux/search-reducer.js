import {
    SEARCH_DATA_REQUEST,
    SEARCH_DATA_SUCCES,
    SEARCH_DATA_ERROR
}
from './actions'

let initialState = {
    loading: true,
    error: '',
    track: []
}

export const trackInfo = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_DATA_REQUEST:
            return {...state, loading: true }
        case SEARCH_DATA_SUCCES:
            return { loading: false, track: action.payload, error: '' }
        case SEARCH_DATA_ERROR:
            return { loading: false, track: [], error: action.error }
        default:
            return state
    }
}