import React from 'react'
import { Button, Divider, Grid, Segment } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'



class HomeContainer extends React.Component {



    render(){
        
    
        return(
            <Segment placeholder clearing>
              <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                  <Grid.Column verticalAlign='middle'>
                  <Button content='User' icon='user circle' size='big' as={NavLink} name='exhibitionContainer' to='/explore' />
                </Grid.Column>
                </Grid.Column>
          
                <Grid.Column verticalAlign='middle'>
                  <Button content='Gallery' icon='paint brush' size='big' />
                </Grid.Column>
              </Grid>
          
              <Divider vertical>Or</Divider>
            </Segment>
        )
    }
}

export default HomeContainer