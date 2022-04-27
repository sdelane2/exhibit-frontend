import React, {Suspense} from 'react'
import {connect} from 'react-redux'
import {getFavoriteExhibitions, getFavoriteArtworks, deleteFavoriteExhibition, deleteFavoriteArtwork} from '../Redux/actions.js'
import {Container, Grid, Divider, Header, Image, Segment} from 'semantic-ui-react'
import ExhibitionThumbnail from '../Components/ExhibitionThumbnail.js'
import Artwork from '../Components/Artwork.js'




class FavoritesContainer extends React.Component {

    componentDidMount(){
        this.props.favoriteExhibitions(this.props.user.id)
        this.props.favoriteArtworks(this.props.user.id)
    }
    
    exhibitionFunction = () => {
        
        if(this.props.exhibitions.length < 1){
            return "You don't have any favorites ...yet!"
        }
        return this.props.exhibitions.map(favorite =>  <ExhibitionThumbnail exhibition={favorite.exhibition} container={true}  image={favorite.image} addFavoriteExhibition={this.props.addFavoriteExhibition} user={this.props.user} faves={this.props.exhibitions} deleteFave={this.props.deleteFave}/>)

    }

    artworkFunction = () => {
        
        if(this.props.artworks.length < 1){
            return "You don't have any favorites ...yet!"
        }
       return this.props.artworks.map(artwork =>  <Artwork artwork={artwork.artwork} container={true} exhibited_artwork={artwork.exhibited_artwork} exhibitions={this.props.exhibitions} addFavoriteArtwork={this.props.addFavoriteArtwork} user={this.props.user} faves={this.props.artworks} deleteFaveArtwork={this.props.deleteFaveArtwork} />)
        
    }
    render(){
        console.log(this.props.exhibitions)
        console.log(this.props.artworks)

        

        return(
            <div >
            <br></br>
            <Container>
            <Header as="h2">{this.props.user.name}'s Favorite Exhibitions:</Header>
                <Grid container centered columns={3}  padded="vertically">
                    {this.exhibitionFunction()}
                </Grid>
            
                <Divider section />
            
            <Header as="h2" >Favorite Artworks:</Header>
            <Grid container centered columns={3}  padded="vertically">
                {this.artworkFunction()}
            </Grid>
        </Container>
        </div>


        )
    }

}

const msp = state => {
    return {
    exhibitions: state.favoriteExhibitions,
    artworks: state.favoriteArtworks
    }
}

const mdp = dispatch => {
    return {
        favoriteExhibitions: (userId) => dispatch(getFavoriteExhibitions(userId)),
        favoriteArtworks: (userId) => dispatch(getFavoriteArtworks(userId)),
        deleteFave: (id) => dispatch(deleteFavoriteExhibition(id)),
        deleteFaveArtwork: (id) => dispatch(deleteFavoriteArtwork(id))


    }
}

export default connect(msp, mdp)(FavoritesContainer)