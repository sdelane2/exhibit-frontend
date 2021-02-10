import React from 'react'
import Artwork from '../Components/Artwork.js'
import {connect} from 'react-redux'
import {getExhibitedArtworks, addArtworkToFavorites} from '../Redux/actions.js'

class ExhibitionShow extends React.Component {
   
    

    componentDidMount(){
        this.props.getAllExhibitedArtworks(this.props.match.params.id)
    
    }
    
    render(){
        console.log(this.props.myExhibitedArtworks)
        let artworks = this.props.myExhibitedArtworks.map(artwork =>  <Artwork artwork={artwork.gallery_artwork} container={true} id={artwork.id} addFavoriteArtwork={this.props.addFavoriteArtwork} user={this.props.user} />)
        return(
            <div class="flex-container" id="artwork-container">
                {console.log(this.props)}
                {artworks}
            </div>
        )
    }
}

const msp = state => {
    return {
    myExhibitedArtworks: state.exhibitedArtworks
    }
}

const mdp = dispatch => {
    return {
        getAllExhibitedArtworks: (exhibitionId) => dispatch(getExhibitedArtworks(exhibitionId)),
        addFavoriteArtwork: (artworkObj) => dispatch(addArtworkToFavorites(artworkObj))


    }
}

export default connect(msp, mdp)(ExhibitionShow)

