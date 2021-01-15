import React from 'react'
import Artwork from '../Components/Artwork.js'

class ArtworkContainer extends React.Component {

    state = {
        artworks: []
    }
    
 componentDidMount(){
        fetch("http://localhost:3000/artworks")
        .then(r => r.json())
        .then(data => {
          this.setState({artworks: data})
          console.log(this.state)
        })
    
    }
    
    
    
    render() {

    

    return(
        <div class="flex-container" id="artwork-container">
        {this.state.artworks.map(artwork => <Artwork artwork={artwork} />)}
        </div>
    )
}
}

export default ArtworkContainer  