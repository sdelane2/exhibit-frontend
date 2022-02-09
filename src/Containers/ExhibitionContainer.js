import { render } from '@testing-library/react';
import React from 'react'
import {connect} from 'react-redux'
import ExhibitionThumbnail from '../Components/ExhibitionThumbnail.js'
import {userExhibitions, addExhibitionToFavorites, getFavoriteExhibitions, deleteFavoriteExhibition} from '../Redux/actions.js'
import {Container, Grid, Header} from 'semantic-ui-react'


class ExhibitionContainer extends React.Component {

    

    componentDidMount(){
        console.log(this.state)
        this.props.getExhibitions()
        this.props.favoriteExhibitions(this.props.user.id)
    }

    exhibitionFunction = () => {
        let publishedExhibitions = this.props.exhibitions.filter(exhibition => exhibition.published === true )
        return publishedExhibitions.map(exhibition =>  <ExhibitionThumbnail exhibition={exhibition} container={true}  image={exhibition.image} addFavoriteExhibition={this.props.addFavoriteExhibition} user={this.props.user} faves={this.props.faves} deleteFave={this.props.deleteFave}/>)
    }

    render() {
        return(
            <div>
                <br></br> 
            <Container>
                <Grid container centered columns={3}  padded="vertically">
                    {this.exhibitionFunction()}
                </Grid>
            </Container>
            </div>
        )
    }
}

const msp = state => {
    return {
    exhibitions: state.userExhibitions,
    faves: state.favoriteExhibitions,
    }
}

const mdp = dispatch => {
    return {
        favoriteExhibitions: (userId) => dispatch(getFavoriteExhibitions(userId)),
        getExhibitions: () => dispatch(userExhibitions()),
        addFavoriteExhibition: (exhibitionObj) => dispatch(addExhibitionToFavorites(exhibitionObj)),
        deleteFave: (id) => dispatch(deleteFavoriteExhibition(id))
    }
}

export default connect(msp, mdp)(ExhibitionContainer)