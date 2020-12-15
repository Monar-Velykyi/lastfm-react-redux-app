import axios from 'axios'

const API_KEY = ''

export const TRACKS_DATA_REQUEST = 'TRACKS_DATA_REQUEST'
export const TRACKS_DATA_SUCCES = 'TRACKS_DATA_SUCCES'
export const TRACKS_DATA_ERROR = 'TRACKS_DATA_ERROR'

export const ARTIST_DATA_REQUEST = 'ARTIST_DATA_REQUEST'
export const ARTIST_DATA_SUCCES = 'ARTIST_DATA_SUCCES'
export const ARTIST_DATA_ERROR = 'ARTIST_DATA_ERROR'

export const SEARCH_DATA_REQUEST = 'SEARCH_DATA_REQUEST'
export const SEARCH_DATA_SUCCES = 'SEARCH_DATA_SUCCES'
export const SEARCH_DATA_ERROR = 'SEARCH_DATA_ERROR'

const fetchingTracksRequest = () => {
    return {
        type: TRACKS_DATA_REQUEST
    }
}

const fetchingTracksSuccess = (data) => {
    return {
        type: TRACKS_DATA_SUCCES,
        payload: data
    }
}

const fetchingTracksError = (error) => {
    return {
        type: TRACKS_DATA_ERROR,
        error: error
    }
}

const fetchingArtistRequest = () => {
    return {
        type: ARTIST_DATA_REQUEST
    }
}

const fetchingArtistSuccess = (data) => {
    return {
        type: ARTIST_DATA_SUCCES,
        payload: data
    }
}

const fetchingArtistError = (error) => {
    return {
        type: ARTIST_DATA_ERROR,
        error: error
    }
}

const fetchingSearchRequest = () => {
    return {
        type: SEARCH_DATA_REQUEST
    }
}

const fetchingSearchSuccess = (data) => {
    return {
        type: SEARCH_DATA_SUCCES,
        payload: data
    }
}

const fetchingSearchError = (error) => {
    return {
        type: SEARCH_DATA_ERROR,
        error: error
    }
}


export const getAllTracksData = (page) => {

    const ALL_TRACKS_URL = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json&page=${page}`

    return dispatch => {
        dispatch(fetchingTracksRequest())
        axios.get(ALL_TRACKS_URL)
            .then((response) => {
                const data = response.data.tracks.track
                dispatch(fetchingTracksSuccess(data))
            }).catch((err) => {
                fetchingTracksError(err)
            })
    }
}

export const getArtistData = (artist) => {

    const ARTIST_DATA_URL = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${API_KEY}&format=json&`

    return dispatch => {
        dispatch(fetchingArtistRequest())
        axios.get(ARTIST_DATA_URL)
            .then((response) => {
                const data = response.data.artist
                dispatch(fetchingArtistSuccess(data))
            }).catch((err) => {
                fetchingArtistError(err)
            })
    }
}

export const getTrackInfo = (track) => {

    const TRACK_DATA_URL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${track}&api_key=${API_KEY}&format=json`

    return dispatch => {
        dispatch(fetchingSearchRequest())
        axios.get(TRACK_DATA_URL)
            .then((response) => {
                const data = response.data.results.trackmatches.track
                dispatch(fetchingSearchSuccess(data))
            }).catch((err) => {
                fetchingSearchError(err)
            })
    }
}