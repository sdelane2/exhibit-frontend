import React from 'react'
import {connect} from 'react-redux'
import {getGalleryArtworks} from '../Redux/actions.js'
import Artwork from '../Components/Artwork.js'



class GalleryArtworkContainer extends React.Component{

    

    componentDidMount(){
        if(localStorage.token){
        this.props.getArtworks(parseInt(localStorage.gallery))

        
        console.log(this.props.myArtworks)
    }}

    

    render(){
        let artworks = this.props.myArtworks.map(artwork =>  <Artwork artwork={artwork} container={false} key={artwork.id} />)
        return(
            
            <div >
                Gallery Artworks:
                {artworks}
            </div>

        
            
        )
    }
}

const msp = state => {
    return {
    gallery: state.gallery,
    myArtworks: state.galleryArtworks
    }
}

const mdp = dispatch => {
    return {
        getArtworks: (galleryId) => dispatch(getGalleryArtworks(galleryId))


    }
}

export default connect(msp, mdp)(GalleryArtworkContainer)