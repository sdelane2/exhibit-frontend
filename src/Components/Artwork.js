import React from 'react'
import {connect} from 'react-redux'
import { addArtworkToExhibition } from '../Redux/actions'
import {Card, Button, Image, Dropdown, Form} from 'semantic-ui-react'

class Artwork extends React.Component {

    favoriteClickHandler = () => {
        const newFavorite = {
            exhibited_artwork_id: this.props.exhibited_artwork.id,
            user_id: this.props.user.id
        }

        this.props.addFavoriteArtwork(newFavorite)

    }

    deleteClickHandler = () => {
        this.props.deleteArtwork(this.props.artwork.id)
    }

    state = {
        exhibition_id: null,
        artwork_id: null
    }


    handleChange = event => {
        this.setState({
            exhibition_id: event.target.value,
            artwork_id: this.props.artwork.id

        })
    }
    
    submitHandler = (e) => {
        e.preventDefault()
        const newArtwork = {
            exhibition_id: this.state.exhibition_id,
            artwork_id: this.state.artwork_id
        }

        this.props.addToExhibition(newArtwork)
        
    }

    deleteFaveClickHandler = () => {
        
        let fave = [...this.props.faves].find(fave => fave.exhibited_artwork_id === this.props.exhibited_artwork.id)
        this.props.deleteFaveArtwork(fave.id)
    }

    render(){
        
        let conditional = () => { 
            if(this.props.exhibitions.flatMap(exh => exh.exhibited_artworks.flatMap(art => art.id !== this.props.artwork.id))){
                return this.props.exhibitions.map(exh => <option value={exh.id} key={exh.id}>{exh.title}</option>)
            }
        }

        console.log(this.props.artwork.title)
        console.log(this.props.faves)
        
        
    return (
        <>
        {this.props.container ?
            [...this.props.faves].find(fave => fave.exhibited_artwork_id === this.props.exhibited_artwork.id) ?
            <div className="flex-item">
            <Card color='grey' raised >
            <Card.Content style={{height: "350px"}}>
                
                <Image
                className="index-img"
                src={this.props.artwork.image_url}
                
                />
                <Card.Header><br></br>{this.props.artwork.artist}</Card.Header>
                <Card.Description>{this.props.artwork.title}</Card.Description>

            </Card.Content>
            <Card.Content extra>
            
            <Button negative onClick={this.deleteFaveClickHandler} style={{width: "178px"}}>Remove Favorite Artwork</Button>
            </Card.Content>   
            </Card>
            <div id="spacer">
            
            </div>
            

        </div>
        :
        <div className="flex-item">
            <Card color='grey' raised >
            <Card.Content style={{height: "350px"}}>
                
                <Image
                className="index-img"
                src={this.props.artwork.image_url}
                
                />
                <Card.Header><br></br>{this.props.artwork.artist}</Card.Header>
                <Card.Description>{this.props.artwork.title}</Card.Description>

            </Card.Content>
            <Card.Content extra>
            
            <Button color="grey" onClick={this.favoriteClickHandler} style={{width: "178px"}}>Favorite Artwork</Button>
            </Card.Content>   
            </Card>
            <div id="spacer">
            
            </div>
            

        </div>

        :
        <div>
        <div className="flex-item">
            <Card color='grey' raised >
            <Card.Content style={{height: "350px"}}>
                
                <Image
                className="index-img"
                src={this.props.artwork.image_url}
                
                />
                <Card.Header><br></br>{this.props.artwork.artist}</Card.Header>
                <Card.Description>{this.props.artwork.title}</Card.Description>

            </Card.Content>
            <Card.Content extra>
            <Form onSubmit={this.submitHandler}>
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="">Select an Exhibition:</option>
                {conditional()}
                </select>
                <Button type="submit" style={{width: "178px"}}>Add to Exhibition</Button>
            </Form>
            <Button onClick={this.deleteClickHandler} style={{width: "178px"}}>Delete this artwork</Button>
            </Card.Content>   
            </Card>
            </div>
            <div id="spacer">
            
            </div>
        
        </div>
        }
        </>
    )
    }
}

const mdp = (dispatch) => {
    return {
        addToExhibition: (artworkObj) => dispatch(addArtworkToExhibition(artworkObj))
    }
}

export default connect(null, mdp)(Artwork)