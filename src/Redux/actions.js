import {
    LOGIN_GALLERY,
    SIGNUP_GALLERY,
    GALLERY,
    EXHIBITIONS,
    EXHIBITED_ARTWORKS,
    GALLERY_ARTWORKS,
    CREATE_NEW_EXHIBITION,
    DELETE_EXHIBITION
} from './actionTypes'

/**** GALLERY_USER ACTIONS ****/

export function signUpGallery(galleryObj){
    return function(dispatch){
        fetch('http://localhost:3000/galleries', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({gallery: galleryObj})
        })
        .then(r => r.json())
        .then(data => {
            localStorage.setItem('token', data.jwt)
            dispatch({type: SIGNUP_GALLERY, payload: data.gallery})
        })
    }
}

export function startGallerySession(){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('http://localhost:3000/profile', {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accepts: "application/json"},
      })
      .then(r => r.json())
      .then(data => {
          console.log(data)
        dispatch({type: GALLERY, payload: data.gallery})
        })
    }
}

export function loginGallery(galleryInfo) {
    return function (dispatch) {
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          accepts: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({ gallery: galleryInfo }),
      })
        .then((r) => r.json())
        .then((data) => {
            console.log(data)
          localStorage.setItem("token", data.jwt);
          localStorage.setItem("gallery", data.gallery.id);
          dispatch({type: LOGIN_GALLERY, payload: data.gallery})
      })
    }
}

export function getExhibitions(galleryId){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('http://localhost:3000/exhibitions', {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
          })
        .then(r => r.json())
        .then(data => {
            
            dispatch({type: EXHIBITIONS, payload: data.filter(d => d.gallery_id === galleryId)})
        })
    }
}

export function getExhibitedArtworks(exhibitionId){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch(`http://localhost:3000/exhibitions/${exhibitionId}`, {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
          })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            dispatch({type: EXHIBITED_ARTWORKS, payload: data.exhibited_artworks})
        })
    }
}

export function getGalleryArtworks(galleryId){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('http://localhost:3000/gallery_artworks', {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
          })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            dispatch({type: GALLERY_ARTWORKS, payload: data.filter(d => d.gallery_id === galleryId)})
        })
    }
}

export function createExhibition(exhibitionObj){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('http://localhost:3000/exhibitions', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(exhibitionObj)
        })
        .then(r => r.json())
        .then(newExhibition => {
            console.log(newExhibition)
            dispatch({type: CREATE_NEW_EXHIBITION, payload: newExhibition})
        })
    }
}

export function deleteFromExhibitions(id){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch(`http://localhost:3000/exhibitions/${id}`, {
            method: "DELETE",
            headers: {
                'content-type' : 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({type: DELETE_EXHIBITION, payload: id})
    }
}
