import React from 'react'
import { Button, Divider, Grid, Segment } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import Signup from '../Components/Signup.js'
import Login from '../Components/Login.js'



class HomeContainer extends React.Component {



    render(){
        
    
        return(
            <Segment id="home-container" placeholder clearing>
              <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                  <Grid.Column verticalAlign='middle'>
                  <Signup signupHandler={this.props.signupHandler} />
                </Grid.Column>
                </Grid.Column>
          
                <Grid.Column verticalAlign='middle'>
                    <Login loginHandler={this.props.loginHandler} />
                </Grid.Column>
              </Grid>
          
              <Divider vertical>Or</Divider>
            </Segment>
        )
    }
}

export default HomeContainer