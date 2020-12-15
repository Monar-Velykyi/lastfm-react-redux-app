import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { allTracksData } from './allTracks-reducer'
import { artistInfo } from './artist-reducer'
import { trackInfo } from './search-reducer'

const reducer = combineReducers({
    allTracksData,
    artistInfo,
    trackInfo
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store