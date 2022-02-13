import React from 'react'
import { Button, Divider, Grid, Segment, Icon } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import Signup from '../Components/Signup.js'
import Login from '../Components/Login.js'
import ExhibitionContainer from './ExhibitionContainer.js'
import {Link} from 'react-router-dom'



class HomeContainer extends React.Component {

  

    render(){
        
        console.log(this.props)
    
        return(
            
        <div className="home-body">
          <div  > 
          <Segment placeholder  id="home-segment">
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
              <Grid.Column verticalAlign='middle'>
              <Link to={{ pathname: '/user/login'}} >
              <Icon name="user circle" size="huge" />
              
              </Link>
              
            </Grid.Column>
            </Grid.Column>
      
            <Grid.Column verticalAlign='middle'>
            <Link to={{ pathname: '/gallery/login'}} >
                <Icon name="paint brush" size="huge" />
                </Link>
                
            </Grid.Column>
          </Grid>
      
          <Divider vertical></Divider>
        </Segment>
        
        </div>
        </div>
        )
    }
}

export default HomeContainer