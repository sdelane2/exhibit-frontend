import React from 'react'
import Artwork from '../Components/Artwork.js'

class ExhibitionShow extends React.Component {
   
    state = {
        exhibitedArtworks: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/exhibitions/${this.props.match.params.id}`)
        .then(r => r.json())
        .then(data => {
          this.setState({exhibitedArtworks: data.exhibited_artworks})
        })
    
    }
    
    render(){
        return(
            <div class="flex-container" id="artwork-container">
                {console.log(this.props)}
                {this.state.exhibitedArtworks.map(artwork => <Artwork artwork={artwork} container={true} />)}
            </div>
        )
    }
}

export default ExhibitionShow

