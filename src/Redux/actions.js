import {
    LOGIN_GALLERY,
    SIGNUP_GALLERY,
    GALLERY,
    EXHIBITIONS,
    EXHIBITED_ARTWORKS,
    GALLERY_ARTWORKS,
    CREATE_NEW_EXHIBITION,
    DELETE_EXHIBITION,
    CREATE_NEW_ARTWORK,
    DELETE_ARTWORK,
    USER, 
    SIGNUP_USER,
    LOGIN_USER,
    USER_EXHIBITIONS,
    NEW_EXHIBITED_ARTWORK,
    FAVORITE_EXHIBITION,
    FAVORITE_ARTWORK, 
    UPDATE_EXHIBITION,
    FAVORITE_EXHIBITIONS,
    FAVORITE_ARTWORKS,
    REMOVE_FAVORITE_EXHIBITION,
    REMOVE_EXHIBITED_ARTWORK,
    REMOVE_FAVORITE_ARTWORK,
    USER_EXHIBITED_ARTWORKS,
    LOGOUT,
    PAGE_LOADING_DONE
} from './actionTypes'

/**** GALLERY_USER ACTIONS ****/

export function signUpGallery(galleryObj){
    return function(dispatch){
        fetch('https://floating-forest-25639.herokuapp.com/galleries.json', {
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
        fetch('https://floating-forest-25639.herokuapp.com/profile.json', {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accepts: "application/json"},
      })
      .then(r => r.json())
      .then(data => {
          console.log("starting gallery session", data)
        dispatch({type: GALLERY, payload: data.gallery})
        })
    }
}

export function startUserSession(){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('https://floating-forest-25639.herokuapp.com/explore.json', {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accepts: "application/json"},
      })
      .then(r => r.json())
      .then(data => {
          console.log("starting user session", data)
        dispatch({type: USER, payload: data.gallery})
        })
    }
}

export function signUpUser(userObj){
    return function(dispatch){
        fetch('https://floating-forest-25639.herokuapp.com/users.json', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({user: userObj})
        })
        .then(r => r.json())
        .then(data => {
            localStorage.setItem('token', data.jwt)
            dispatch({type: SIGNUP_USER, payload: data.user})
        })
    }
}

export function loginUser(userInfo) {
    return function (dispatch) {
      fetch("https://floating-forest-25639.herokuapp.com/user/login.json", {
        method: "POST",
        headers: {
          accepts: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({ user: userInfo }),
      })
        .then((r) => r.json())
        .then((data) => {
            console.log("logging in user", data)
            localStorage.setItem("token", data.jwt);
            localStorage.setItem("user", data.user.id);
            dispatch({type: LOGIN_USER, payload: data.user})
      })
    }
}

// export function loginGallery(galleryInfo) {
//     return function (dispatch) {
//       fetch("https://floating-forest-25639.herokuapp.com/gallery/login.json", {
//         method: "POST",
//         headers: {
//           accepts: "application/json",
//           "content-type": "application/json",
//         },
//         body: JSON.stringify({ gallery: galleryInfo }),
//       })
//         .then((r) => r.json())
//         .then((data) => {
//         console.log("logging in gallery", data)
//         localStorage.removeItem("user")
//         localStorage.setItem("token", data.jwt);
//         localStorage.setItem("gallery", data.gallery.id);
//           dispatch({type: LOGIN_GALLERY, payload: data.gallery})
//       })
//     }
// }



export function getExhibitions(galleryId){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('https://floating-forest-25639.herokuapp.com/exhibitions.json', {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
          })
        .then(r => r.json())
        .then(data => {
            console.log("getting exhibitions", data)
            dispatch({type: EXHIBITIONS, payload: data.filter(d => d.gallery_id === galleryId)})

        })
    }
}

export function userExhibitions(){
    
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('https://floating-forest-25639.herokuapp.com/exhibitions.json', {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
          })
        .then(r => r.json())
        .then(data => {
            dispatch({type: USER_EXHIBITIONS, payload: data})
            dispatch({type: PAGE_LOADING_DONE, payload: true})
        })
    }
}

export function getExhibitedArtworks(exhibitionId){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch(`https://floating-forest-25639.herokuapp.com/exhibited_artworks.json`, {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
          })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            
            dispatch({type: EXHIBITED_ARTWORKS, payload: data.filter(d => d.exhibition_id === parseInt(exhibitionId))})
            dispatch({type: PAGE_LOADING_DONE, payload: false})
        })
    }
}

export function getUserExhibitedArtworks(exhibitionId){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch(`https://floating-forest-25639.herokuapp.com/exhibited_artworks.json`, {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
          })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            
            dispatch({type: USER_EXHIBITED_ARTWORKS, payload: data.filter(d => d.exhibition_id === parseInt(exhibitionId))})
            dispatch({type: PAGE_LOADING_DONE, payload: false})
        })
    }
}

export function addArtworkToExhibition(artworkObj){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('https://floating-forest-25639.herokuapp.com/exhibited_artworks.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(artworkObj)
        })
        .then(r => r.json())
        .then(newExhibitedArtwork => {
            console.log(newExhibitedArtwork)
            dispatch({type: NEW_EXHIBITED_ARTWORK, payload: newExhibitedArtwork})
        })
    }
}




export function getGalleryArtworks(galleryId){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('https://floating-forest-25639.herokuapp.com/gallery_artworks.json', {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
          })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            dispatch({type: GALLERY_ARTWORKS, payload: data.filter(d => d.gallery_id === galleryId)})
            dispatch({type: PAGE_LOADING_DONE, payload: true})

        })
    }
}

export function createExhibition(exhibitionObj){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('https://floating-forest-25639.herokuapp.com/exhibitions.json', {
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
        fetch(`https://floating-forest-25639.herokuapp.com/exhibitions/${id}`, {
            method: "DELETE",
            headers: {
                'content-type' : 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({type: DELETE_EXHIBITION, payload: id})
    }
}

export function createArtwork(artworkObj){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('https://floating-forest-25639.herokuapp.com/gallery_artworks.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(artworkObj)
        })
        .then(r => r.json())
        .then(newArtwork => {
            console.log(newArtwork)
            dispatch({type: CREATE_NEW_ARTWORK, payload: newArtwork})
        })
    }
}

export function deleteFromArtworks(id){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch(`https://floating-forest-25639.herokuapp.com/gallery_artworks/${id}`, {
            method: "DELETE",
            headers: {
                'content-type' : 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({type: DELETE_ARTWORK, payload: id})
    }
}

export function addExhibitionToFavorites(exhibitionObj){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('https://floating-forest-25639.herokuapp.com/favorite_exhibitions.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(exhibitionObj)
        })
        .then(r => r.json())
        .then(newFave => {
            console.log(newFave)
            dispatch({type: FAVORITE_EXHIBITION, payload: newFave})
        })
    }
}

export function addArtworkToFavorites(artworkObj){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('https://floating-forest-25639.herokuapp.com/favorite_artworks.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(artworkObj)
        })
        .then(r => r.json())
        .then(newFave => {
            console.log(newFave)
            dispatch({type: FAVORITE_ARTWORK, payload: newFave})
        })
    }
}

export function updateExhibition(exhibitionId, updateObj){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch(`https://floating-forest-25639.herokuapp.com/exhibitions/${exhibitionId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(updateObj)
        })
        .then(r => r.json())
        .then(updatedExhibition => {
            dispatch({type: UPDATE_EXHIBITION, payload: updatedExhibition})
        })
    }
}

export function getExhibition(exhibitionId){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch(`https://floating-forest-25639.herokuapp.com/exhibitions/${exhibitionId}`, {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
          })
        .then(r => r.json())
        .then(data => {
            console.log("getting exhibition", data)
            dispatch({type: EXHIBITIONS, payload: data})
        })
    }
}

export function getFavoriteArtworks(userId){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('https://floating-forest-25639.herokuapp.com/favorite_artworks.json', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        })
        .then(r => r.json())
        .then(data => {
            
            dispatch({type: FAVORITE_ARTWORKS, payload: data.filter(d => d.user_id === userId)})
        })
    }
}

export function getFavoriteExhibitions(userId){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch('https://floating-forest-25639.herokuapp.com/favorite_exhibitions.json', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        })
        .then(r => r.json())
        .then(data => {
            
            dispatch({type: FAVORITE_EXHIBITIONS, payload: data.filter(d => d.user_id === userId)})
        })
    }
}

export function deleteFavoriteExhibition(id){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch(`https://floating-forest-25639.herokuapp.com/favorite_exhibitions/${id}`, {
            method: "DELETE",
            headers: {
                'content-type' : 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({type: REMOVE_FAVORITE_EXHIBITION, payload: id})
    }
}

export function deleteExhibitedArtwork(id){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch(`https://floating-forest-25639.herokuapp.com/exhibited_artworks/${id}`, {
            method: "DELETE",
            headers: {
                'content-type' : 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({type: REMOVE_EXHIBITED_ARTWORK, payload: id})
    }
}

export function deleteFavoriteArtwork(id){
    const token = localStorage.getItem('token')
    return function(dispatch){
        fetch(`https://floating-forest-25639.herokuapp.com/favorite_artworks/${id}`, {
            method: "DELETE",
            headers: {
                'content-type' : 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({type: REMOVE_FAVORITE_ARTWORK, payload: id})
    }
}

export function logOutUser(){
    return {type: LOGOUT}
}



