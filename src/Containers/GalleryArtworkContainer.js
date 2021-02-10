import React from 'react'
import {connect} from 'react-redux'
import {getGalleryArtworks, deleteFromArtworks} from '../Redux/actions.js'
import Artwork from '../Components/Artwork.js'
import ArtworkForm from '../Components/ArtworkForm.js'




class GalleryArtworkContainer extends React.Component{

    

    componentDidMount(){
        if(localStorage.token){
        this.props.getArtworks(parseInt(localStorage.gallery))

        
        console.log(this.props.myArtworks)
    }}

    deleteArtwork = (id) => {
        this.props.deleteArtwork(id)
    }
    

    render(){
        let artworks = this.props.myArtworks.map(artwork =>  <Artwork artwork={artwork} container={false} key={artwork.id} deleteArtwork={this.deleteArtwork} exhibitions={this.props.exhibitions}/>)
        return(
            
            <div >
                Gallery Artworks:
                {console.log(this.props)}
                {artworks}
                <ArtworkForm gallery={this.props.gallery}/>

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
        getArtworks: (galleryId) => dispatch(getGalleryArtworks(galleryId)),
        deleteArtwork: (id) => dispatch(deleteFromArtworks(id))

    }
}

export default connect(msp, mdp)(GalleryArtworkContainer)