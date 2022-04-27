import React from 'react'
import Artwork from '../Components/Artwork.js'

class ArtworkContainer extends React.Component {

    state = {
        artworks: []
    }
    
 componentDidMount(){
        fetch("https://floating-forest-25639.herokuapp.com/artworks.json")
        .then(r => r.json())
        .then(data => {
          this.setState({artworks: data})
          console.log(this.state)
        })
    
    }
    
    
    
    render() {

    

    return(
        <div className="flex-container" id="artwork-container">
        {this.state.artworks.map(artwork => <Artwork artwork={artwork} />)}
        </div>
    )
}
}

export default ArtworkContainer  