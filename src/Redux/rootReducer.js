import {combineReducers} from 'redux'
import {USER, SIGNUP_USER, LOGIN_USER, LOGIN_GALLERY, GALLERY, SIGNUP_GALLERY, EXHIBITIONS, EXHIBITED_ARTWORKS, GALLERY_ARTWORKS, CREATE_NEW_EXHIBITION, DELETE_EXHIBITION, CREATE_NEW_ARTWORK, DELETE_ARTWORK, USER_EXHIBITIONS, NEW_EXHIBITED_ARTWORK, FAVORITE_EXHIBITION, FAVORITE_ARTWORK} from './actionTypes'

const defaultState = {
    gallery: {},
    exhibitions: [],
    exhibited_artworks: [],
    gallery_artworks: [],
    user: {},
    favorite_exhibitions: [],
    favorite_artworks:[]
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

function userReducer(prevState = defaultState.user, action){
    switch(action.type){
        case LOGIN_USER:
            return action.payload
        case USER:
            return action.payload
        case SIGNUP_USER:
            return action.payload
        default:
            return prevState

    }
}

function galleryExhibitionsReducer(prevState = defaultState.exhibitions, action){
    switch(action.type){
        case EXHIBITIONS:
            return action.payload
        case USER_EXHIBITIONS:
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
        case NEW_EXHIBITED_ARTWORK:
            return [...prevState, action.payload]
        default:
            return prevState
    }
}

function galleryArtworkReducer(prevState = defaultState.gallery_artworks, action){
    switch(action.type){
        case GALLERY_ARTWORKS:
            return action.payload
        case CREATE_NEW_ARTWORK:
            console.log("in reducer", action.payload)
            return [...prevState, action.payload]
        case DELETE_ARTWORK:
            const newArtworks = [...prevState].filter(d => d.id !== action.payload)
            return newArtworks
        default:
            return prevState
    
    }
}

function favoriteExhibitionsReducer(prevState = defaultState.favorite_exhibitions, action){
    switch(action.type){
        case FAVORITE_EXHIBITION:
            return [...prevState, action.payload]
        default:
            return prevState

    }
}

function favoriteArtworksReducer(prevState = defaultState.favorite_artworks, action){
    switch(action.type){
        case FAVORITE_ARTWORK:
            return [...prevState, action.payload]
        default:
            return prevState

    }
}
const rootReducer = combineReducers({
    favoriteArtworks: favoriteArtworksReducer,
    favoriteExhibitions: favoriteExhibitionsReducer,
    user: userReducer,
    gallery: galleryReducer,
    galleryExhibitions: galleryExhibitionsReducer,
    exhibitedArtworks: exhibitedArtworksReducer,
    galleryArtworks: galleryArtworkReducer
})


export default rootReducer