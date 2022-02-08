import React, {Suspense} from 'react'
import {connect} from 'react-redux'
import ExhibitionThumbnail from '../Components/ExhibitionThumbnail.js'
import {getExhibitions, deleteFromExhibitions, updateExhibition} from '../Redux/actions.js'
import ExhibitionForm from '../Components/ExhibitionForm.js'
import {Container, Grid, Header, Divider} from 'semantic-ui-react'
const GalleryArtworkContainer = React.lazy(() => import('./GalleryArtworkContainer.js'));

class GalleryContainer extends React.Component{

    
    componentDidMount(){
        
        this.props.getGalleryExhibitions(parseInt(localStorage.user))
        console.log(localStorage)
        this.setState({page: this.props.page === true})

    }
    
  
    exhibitionFunction = () => {
        return this.props.myExhibitions.map(exhibition =>  <ExhibitionThumbnail exhibition={exhibition} container={false} key={exhibition.id} image={exhibition.image} deleteExhibition={this.deleteExhibition} published={exhibition.published} updateExh={this.props.updateExh} exhibitions={this.props.myExhibitions}/>)
    }

    deleteExhibition = (id) => {
        this.props.deleteExhibition(id)
    }

    render(){
        
    
        console.log(this.props.page)
        return(
            <div >
                <br></br>
                <Header as="h2">{this.props.user.name} gallery</Header>
                <ExhibitionForm gallery={this.props.user} />
                <br></br><br></br>
                <Container>
                
            
                    <Grid relaxed columns={3} centered>
                        {this.exhibitionFunction()}
                        
                        
                        
                    </Grid>
                    
                </Container>
               
                <Divider section />
                <Suspense fallback={<div>Loading...</div>}>
                <Container>
                

                    <GalleryArtworkContainer gallery={this.props.user} exhibitions={this.props.myExhibitions}/>
                
                </Container>
                </Suspense>
            </div>
        )
    }
}

const msp = state => {
    return {
    gallery: state.user,
    myExhibitions: state.galleryExhibitions,
    page: state.loadPage
    }
}

const mdp = dispatch => {
    return {
        getGalleryExhibitions: (galleryId) => dispatch(getExhibitions(galleryId)),
        deleteExhibition: (id) => dispatch(deleteFromExhibitions(id)),
        updateExh: (exhibitionId, updateObj) => dispatch(updateExhibition(exhibitionId, updateObj))


    }
}

export default connect(msp, mdp)(GalleryContainer)