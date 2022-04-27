import React, {Suspense} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {Container, Grid, Header, Transition, Button, Loader} from 'semantic-ui-react'

import {getUserExhibitedArtworks, addArtworkToFavorites, deleteFavoriteArtwork, getFavoriteArtworks} from '../Redux/actions.js'
const Artwork = React.lazy(() => import('../Components/Artwork.js'));


class ExhibitionShow extends React.Component {
   
    

    componentDidMount(){
        this.props.getAllExhibitedArtworks(this.props.match.params.id)
        this.props.favoriteArtworks(this.props.user.id)

    
    }

    
      
    
    render(){

        
        

        console.log(this.props.myExhibitedArtworks)
        let artworks = this.props.myExhibitedArtworks.map(artwork =>  <Artwork artwork={artwork.artwork} container={true} exhibited_artwork={artwork} addFavoriteArtwork={this.props.addFavoriteArtwork} faves={this.props.faves} deleteFaveArtwork={this.props.deleteFaveArtwork} user={this.props.user} />)
        return(
            <>
            {this.props.page ?
            <div>
            <br></br>
            <Loader active inline='centered' size="big"/>
            </div>
            
            :
            
            <div>
            <br></br>
            
            <Header floated="left"><Link to={{ pathname: '/viewing_room', 
                state: {
                    artworks: this.props.myExhibitedArtworks
                } }}><Button>Enter Viewing Room</Button></Link></Header>
            <Container text>
            
            <Header as='h1'  dividing>
            {this.props.location.state.title}
            </Header>
            
            <p>
            {this.props.location.state.description}
            </p>
            </Container>
            <br></br>
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
    myExhibitedArtworks: state.newExhibitedArtworks,
    faves: state.favoriteArtworks,
    page: state.loadPage
    }
}

const mdp = dispatch => {
    return {
        getAllExhibitedArtworks: (exhibitionId) => dispatch(getUserExhibitedArtworks(exhibitionId)),
        addFavoriteArtwork: (artworkObj) => dispatch(addArtworkToFavorites(artworkObj)),
        favoriteArtworks: (userId) => dispatch(getFavoriteArtworks(userId)),
        deleteFaveArtwork: (id) => dispatch(deleteFavoriteArtwork(id))




    }
}

export default connect(msp, mdp)(ExhibitionShow)

