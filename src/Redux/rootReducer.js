import {combineReducers} from 'redux'
import {PAGE_LOADING_DONE, LOGOUT, USER_EXHIBITED_ARTWORKS, REMOVE_FAVORITE_ARTWORK, REMOVE_EXHIBITED_ARTWORK, REMOVE_FAVORITE_EXHIBITION, FAVORITE_EXHIBITIONS, FAVORITE_ARTWORKS, EXHIBITION, UPDATE_EXHIBITION, USER, SIGNUP_USER, LOGIN_USER, LOGIN_GALLERY, GALLERY, SIGNUP_GALLERY, EXHIBITIONS, EXHIBITED_ARTWORKS, GALLERY_ARTWORKS, CREATE_NEW_EXHIBITION, DELETE_EXHIBITION, CREATE_NEW_ARTWORK, DELETE_ARTWORK, USER_EXHIBITIONS, NEW_EXHIBITED_ARTWORK, FAVORITE_EXHIBITION, FAVORITE_ARTWORK} from './actionTypes'

const defaultState = {
    gallery: {},
    exhibitions: [],
    exhibited_artworks: [],
    gallery_artworks: [],
    user: {},
    favorite_exhibitions: [],
    favorite_artworks:[],
    isLoading: true
}

function galleryReducer(prevState = defaultState.gallery, action){
    switch(action.type){
        case LOGIN_GALLERY:
            return action.payload
        case GALLERY:
            return action.payload
        case SIGNUP_GALLERY:
            return action.payload
        case LOGOUT:
            return null
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
        case LOGOUT:
            return null
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
        case UPDATE_EXHIBITION:
            let updatedState = [...prevState]
            let idx = updatedState.findIndex(exhibition => exhibition.id === action.payload.id)
            updatedState[idx] = action.payload
            return updatedState
        default:
            return prevState
    }
}

function userExhibitionsReducer(prevState = defaultState.exhibitions, action){
    switch(action.type){
    
        case USER_EXHIBITIONS:
            return action.payload
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
        case REMOVE_EXHIBITED_ARTWORK:
            const newExhibitedArtworks = [...prevState].filter(d => d.id !== action.payload)
            return newExhibitedArtworks            
        default:
            return prevState
    }
}

function anotherExhibitedArtworksReducer(prevState = defaultState.exhibited_artworks, action){
    switch(action.type){
        case USER_EXHIBITED_ARTWORKS:
            
            return action.payload
              
        default:
            return prevState
    }
}

function pageDoneLoading(prevState = defaultState.isLoading, action){
    switch(action.type){
        case PAGE_LOADING_DONE:
            return action.payload
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
        case FAVORITE_EXHIBITIONS:
            return action.payload
        case REMOVE_FAVORITE_EXHIBITION:
            const newFaves = [...prevState].filter(d => d.id !== action.payload)
            return newFaves
        default:
            return prevState

    }
}

function favoriteArtworksReducer(prevState = defaultState.favorite_artworks, action){
    switch(action.type){
        case FAVORITE_ARTWORK:
            return [...prevState, action.payload]
        case FAVORITE_ARTWORKS:
            return action.payload
        case REMOVE_FAVORITE_ARTWORK:
            const newFaveArtworks = [...prevState].filter(d => d.id !== action.payload)
            return newFaveArtworks
        default:
            return prevState

    }
}
const rootReducer = combineReducers({
    loadPage: pageDoneLoading,
    newExhibitedArtworks: anotherExhibitedArtworksReducer,
    favoriteArtworks: favoriteArtworksReducer,
    favoriteExhibitions: favoriteExhibitionsReducer,
    user: userReducer,
    gallery: galleryReducer,
    userExhibitions: userExhibitionsReducer,
    galleryExhibitions: galleryExhibitionsReducer,
    exhibitedArtworks: exhibitedArtworksReducer,
    galleryArtworks: galleryArtworkReducer
})


export default rootReducer