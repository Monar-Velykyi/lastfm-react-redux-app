import {
    ARTIST_DATA_REQUEST,
    ARTIST_DATA_SUCCES,
    ARTIST_DATA_ERROR
}
from './actions'

let initialState = {
    loading: true,
    error: '',
    info: []
}

export const artistInfo = (state = initialState, action) => {
    switch (action.type) {
        case ARTIST_DATA_REQUEST:
            return {...state, loading: true }
        case ARTIST_DATA_SUCCES:
            return { loading: false, info: action.payload, error: '' }
        case ARTIST_DATA_ERROR:
            return { loading: false, info: [], error: action.error }
        default:
            return state
    }
}