import React from 'react'
import Artwork from '../Components/Artwork.js'
import {connect} from 'react-redux'
import {getExhibitedArtworks} from '../Redux/actions.js'


class ExhibitionEdit extends React.Component {
   
    

    componentDidMount(){
        this.props.getAllExhibitedArtworks(this.props.match.params.id)
    
    }
    
    render(){
        let artworks = this.props.myExhibitedArtworks.map(artwork =>  <Artwork artwork={artwork.gallery_artwork} container={false} />)

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
    gallery: state.gallery,
    myExhibitedArtworks: state.exhibitedArtworks
    }
}

const mdp = dispatch => {
    return {
        getAllExhibitedArtworks: (exhibitionId) => dispatch(getExhibitedArtworks(exhibitionId))

    }
}

export default connect(msp, mdp)(ExhibitionEdit)
