import React from 'react'
import Carousel from 'react-elastic-carousel';
import {Header, Button} from 'semantic-ui-react'


class ViewingRoom extends React.Component {
    render(){
        
        console.log(this.props)
        return(
            <div className="carousel-bg" style={{ backgroundImage: "url(/natural_light_room.jpg)"}}>
                <Header floated="left">
                <br></br>
                <Button className="back-button" onClick={this.props.history.goBack}>Back</Button>
                </Header>
                <div>
                <Carousel renderPagination={({}) => {return (<div></div>) }} className="exhibit-gallery-carousel">
                    {this.props.location.state.artworks.map(artwork => <div key={artwork.id}><img className="carousel-img" src={artwork.gallery_artwork.image_url}/></div>)}
                </Carousel>
                </div>
                    
                
                
            </div>
        )
    }
}

export default ViewingRoom