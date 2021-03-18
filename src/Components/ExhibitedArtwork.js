import React from 'react'
import {Card, Button, Image, Dropdown, Form} from 'semantic-ui-react'


class ExhibitedArtwork extends React.Component {

    deleteClickHandler = () => {
        this.props.deleteArtwork(this.props.id)
    }

    render(){

        return(

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
            
            <Button onClick={this.deleteClickHandler} style={{width: "178px"}}>Remove from Exhibition</Button>
            </Card.Content>   
            </Card>
            <div id="spacer">
            
            </div>
            

        </div>
            
        )
    }


}

export default ExhibitedArtwork