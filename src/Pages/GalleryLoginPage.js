import React from 'react'
import Login from '../Components/Login.js'
import Signup from '../Components/Signup.js'
import { Button, Divider, Grid, Segment, Icon } from 'semantic-ui-react'

class GalleryLoginPage extends React.Component {
   
   
    
    render(){
        
        console.log(this.props)
        return(
           
            <Segment id="home-container" placeholder clearing>
              <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                  <Grid.Column verticalAlign='middle'>
                  <Signup signupHandler={this.props.gallerySignupHandler} />
                </Grid.Column>
                </Grid.Column>
          
                <Grid.Column verticalAlign='middle'>
                    <Login loginHandler={this.props.galleryLoginHandler} startSession={this.props.setGallery} />
                </Grid.Column>
              </Grid>
          
              <Divider vertical>Or</Divider>
            </Segment>
            
        )
    }
}

export default GalleryLoginPage
