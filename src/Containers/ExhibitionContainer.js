import { render } from '@testing-library/react';
import React from 'react'
import {connect} from 'react-redux'
import ExhibitionThumbnail from '../Components/ExhibitionThumbnail.js'
import {userExhibitions, addExhibitionToFavorites} from '../Redux/actions.js'

class ExhibitionContainer extends React.Component {

    componentDidMount(){
        this.props.getExhibitions()
    }



    exhibitionFunction = () => {
        return this.props.exhibitions.map(exhibition =>  <ExhibitionThumbnail exhibition={exhibition} container={true}  image={exhibition.image} addFavoriteExhibition={this.props.addFavoriteExhibition} user={this.props.user}/>)
    }

    render() {
        return(
            <div className="flex-container" id="artwork-container">
                {this.exhibitionFunction()}
                in the explore page
            </div>
        )
    }
}

const msp = state => {
    return {
    exhibitions: state.galleryExhibitions
    }
}

const mdp = dispatch => {
    return {
        getExhibitions: () => dispatch(userExhibitions()),
        addFavoriteExhibition: (exhibitionObj) => dispatch(addExhibitionToFavorites(exhibitionObj))
    }
}

export default connect(msp, mdp)(ExhibitionContainer)