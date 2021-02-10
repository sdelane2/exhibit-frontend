import React from 'react'
import {connect} from 'react-redux'
import ExhibitionThumbnail from '../Components/ExhibitionThumbnail.js'
import GalleryArtworkContainer from './GalleryArtworkContainer.js'
import {getExhibitions, deleteFromExhibitions} from '../Redux/actions.js'
import ExhibitionForm from '../Components/ExhibitionForm.js'

class GalleryContainer extends React.Component{

    

    componentDidMount(){
        
        this.props.getGalleryExhibitions(parseInt(localStorage.gallery))
    }
    
  
    exhibitionFunction = () => {
        return this.props.myExhibitions.map(exhibition =>  <ExhibitionThumbnail exhibition={exhibition} container={false} key={exhibition.id} image={exhibition.image} deleteExhibition={this.deleteExhibition}/>)
    }

    deleteExhibition = (id) => {
        this.props.deleteExhibition(id)
    }

    render(){
        
    
        console.log(this.props.myExhibitions)
        return(
            <div className="flex-container" id="artwork-container">
            <div className="flex-item">
                Exhibitions:
                {this.exhibitionFunction()}
                <br></br>
                {console.log(this.props.myExhibitions)}
                <ExhibitionForm gallery={this.props.gallery} />
                </div>
                {console.log(localStorage)}
                <GalleryArtworkContainer gallery={this.props.gallery} exhibitions={this.props.myExhibitions}/>

            </div>
            
        )
    }
}

const msp = state => {
    return {
    gallery: state.gallery,
    myExhibitions: state.galleryExhibitions
    }
}

const mdp = dispatch => {
    return {
        getGalleryExhibitions: (galleryId) => dispatch(getExhibitions(galleryId)),
        deleteExhibition: (id) => dispatch(deleteFromExhibitions(id))

    }
}

export default connect(msp, mdp)(GalleryContainer)