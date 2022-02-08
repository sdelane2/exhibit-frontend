import React from 'react'
import {connect} from 'react-redux'
import {getGalleryArtworks, deleteFromArtworks} from '../Redux/actions.js'
import Artwork from '../Components/Artwork.js'
import ArtworkForm from '../Components/ArtworkForm.js'
import {Grid, Header, Card} from 'semantic-ui-react'




class GalleryArtworkContainer extends React.Component{

    state = {
        isLoading: true
    }

    componentDidMount(){
        if(localStorage.token){
        this.props.getArtworks(parseInt(localStorage.user))
        this.setState({isLoading: false})
    }}

    deleteArtwork = (id) => {
        this.props.deleteArtwork(id)
    }
    

    render(){
        let artworks = this.props.myArtworks.map(artwork =>  <Artwork artwork={artwork} container={false} key={artwork.id} deleteArtwork={this.deleteArtwork} exhibitions={this.props.exhibitions}/>)
        return(
            <>
            {this.state.isLoading ?
            <div>
            <h3>Loading Artworks...</h3>
            </div>
            
            :
            <div >
                
                <Header as="h2">Your Inventory:</Header><ArtworkForm gallery={this.props.gallery}/><br></br><br></br>
                <Grid container centered columns={3}  divided >
                

                {console.log(this.props)}
                {artworks}
                </Grid>
                
                

            </div>

            }
            </>
        )
    }
}

const msp = state => {
    return {
    gallery: state.user,
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