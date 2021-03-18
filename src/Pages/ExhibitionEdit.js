import React from 'react'
import ExhibitedArtwork from '../Components/ExhibitedArtwork.js'
import {connect} from 'react-redux'
import {getExhibitedArtworks, getExhibitions, deleteExhibitedArtwork} from '../Redux/actions.js'
import {Button} from 'semantic-ui-react'
import ExhibitionEditForm from '../Components/ExhibitionEditForm.js'
import {Container, Grid, Header, Loader} from 'semantic-ui-react'


class ExhibitionEdit extends React.Component {
   
   

    componentDidMount(){
        this.props.getAllExhibitedArtworks(this.props.match.params.id)
        this.props.getGalleryExhibitions(this.props.gallery.id)
        

    
    }
    
    render(){
        console.log(this.props.myExhibitedArtworks)

        let artworks = this.props.myExhibitedArtworks.map(artwork =>  <ExhibitedArtwork artwork={artwork.gallery_artwork} coverImage={artwork.cover_image} deleteArtwork={this.props.deleteArtwork} id={artwork.id} />)
        let exhibition = this.props.exhibitions.find(exhibition => exhibition.id === parseInt(this.props.match.params.id))
        return(
            <>
            {this.props.page ?
            <div>
            <br></br>
            <Loader active inline='centered' size="big"/>
            </div>
            
            :
            <div class="flex-container" id="artwork-container">
                {console.log(this.props.myExhibitedArtworks)}
                <br></br>
                <h2>Title: {exhibition.title}</h2>
                <p>Description: {exhibition.description}</p>
                <ExhibitionEditForm title={this.props.location.state.title} description={this.props.location.state.description} id={this.props.match.params.id} published={this.props.location.state.published}/><br></br>

                <Grid container centered columns={3}  padded="vertically">
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
    gallery: state.gallery,
    myExhibitedArtworks: state.exhibitedArtworks,
    exhibitions: state.galleryExhibitions,
    page: state.loadPage
    }
}

const mdp = dispatch => {
    return {
        getGalleryExhibitions: (galleryId) => dispatch(getExhibitions(galleryId)),
        getAllExhibitedArtworks: (exhibitionId) => dispatch(getExhibitedArtworks(exhibitionId)),
        deleteArtwork: (id) => dispatch(deleteExhibitedArtwork(id))

    }
}

export default connect(msp, mdp)(ExhibitionEdit)
