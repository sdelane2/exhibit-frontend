import React from 'react'
import {Dropdown} from 'semantic-ui-react'
import {connect} from 'react-redux'
import { addArtworkToExhibition } from '../Redux/actions'

class Artwork extends React.Component {

    favoriteClickHandler = () => {
        const newFavorite = {
            exhibited_artwork_id: this.props.id,
            user_id: this.props.user.id
        }

        this.props.addFavoriteArtwork(newFavorite)

    }

    deleteClickHandler = () => {
        this.props.deleteArtwork(this.props.artwork.id)
    }

    state = {
        exhibition_id: null,
        gallery_artwork_id: null
    }


    handleChange = event => {
        this.setState({
            exhibition_id: event.target.value,
            gallery_artwork_id: this.props.artwork.id

        })
    }
    
    submitHandler = (e) => {
        e.preventDefault()
        const newArtwork = {
            exhibition_id: this.state.exhibition_id,
            gallery_artwork_id: this.state.gallery_artwork_id
        }

        this.props.addToExhibition(newArtwork)
        
    }


    render(){
        
    return (
        <>
        {this.props.container ?
        <div className="flex-item">
            <h4>
                {console.log(this.props.artwork.id)}
                {this.props.artwork.title}
            </h4>
            <img 
            className="index-img"
            src={this.props.artwork.image_url}
            alt={this.props.artwork.title}
            />
            <br></br>
            <button onClick={this.favoriteClickHandler}>add artwork to favorites</button>

        </div>
        :
        <div className="flex-item">
            <h4>
                {console.log(this.props.artwork)}
                {this.props.artwork.title}
            </h4>
            <img 
            className="index-img"
            src={this.props.artwork.image_url}
            alt={this.props.artwork.title}
            /><br></br>
            <button onClick={this.deleteClickHandler}>delete this artwork</button>
            <br></br>
            <form onSubmit={this.submitHandler}>
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="">Select an Exhibition:</option>
                {this.props.exhibitions.map(exh => <option value={exh.id} key={exh.id}>{exh.title}</option>)}
                </select>
                <input type="submit" value="Add to show" />
            </form>

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