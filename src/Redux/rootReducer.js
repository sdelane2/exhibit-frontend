import {combineReducers} from 'redux'
import {LOGIN_GALLERY, GALLERY, SIGNUP_GALLERY, EXHIBITIONS, EXHIBITED_ARTWORKS, GALLERY_ARTWORKS, CREATE_NEW_EXHIBITION, DELETE_EXHIBITION} from './actionTypes'

const defaultState = {
    gallery: null,
    exhibitions: [],
    exhibited_artworks: [],
    gallery_artworks: []
}

function galleryReducer(prevState = defaultState.gallery, action){
    switch(action.type){
        case LOGIN_GALLERY:
            return action.payload
        case GALLERY:
            return action.payload
        case SIGNUP_GALLERY:
            return action.payload
        default:
            return prevState
    }
}

function galleryExhibitionsReducer(prevState = defaultState.exhibitions, action){
    switch(action.type){
        case EXHIBITIONS:
            return action.payload
        case CREATE_NEW_EXHIBITION:
            console.log("in reducer", action.payload)
            return [...prevState, action.payload]
        case DELETE_EXHIBITION:
            const newExhibitions = [...prevState].filter(d => d.id !== action.payload)
            return newExhibitions
        default:
            return prevState
    }
}

function exhibitedArtworksReducer(prevState = defaultState.exhibited_artworks, action){
    switch(action.type){
        case EXHIBITED_ARTWORKS:
            return action.payload
        default:
            return prevState
    }
}

function galleryArtworkReducer(prevState = defaultState.gallery_artworks, action){
    switch(action.type){
        case GALLERY_ARTWORKS:
            return action.payload
        default:
            return prevState
    
    }
}



const rootReducer = combineReducers({
    gallery: galleryReducer,
    galleryExhibitions: galleryExhibitionsReducer,
    exhibitedArtworks: exhibitedArtworksReducer,
    galleryArtworks: galleryArtworkReducer
})


export default rootReducer