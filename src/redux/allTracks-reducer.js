import {
    TRACKS_DATA_REQUEST,
    TRACKS_DATA_SUCCES,
    TRACKS_DATA_ERROR
}
from './actions'

let initialState = {
    loading: true,
    error: '',
    tracks: []
}

export const allTracksData = (state = initialState, action) => {
    switch (action.type) {
        case TRACKS_DATA_REQUEST:
            return {...state, loading: true }
        case TRACKS_DATA_SUCCES:
            return { loading: false, tracks: action.payload, error: '' }
        case TRACKS_DATA_ERROR:
            return { loading: false, tracks: [], error: action.error }
        default:
            return state
    }
}