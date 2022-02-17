import React from 'react'
import { Button, Divider, Grid, Segment, Icon } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import Signup from '../Components/Signup.js'
import Login from '../Components/Login.js'
import ExhibitionContainer from './ExhibitionContainer.js'
import {Link} from 'react-router-dom'




class HomeContainer extends React.Component {
  render(){
    return(
    <>
    <section className="hero" >
      <h1>The finest artworks at your fingertips</h1>
      <div className="button-div">
        <a href="#" class="button">Find out more</a>
      </div>
    </section>
    
    <section className="quotes-container">
      <div className="quotes">
        <h2>This app rocks</h2>
      </div>
      <div className="quotes">
        <h2>This app rocks</h2>
      </div>
    </section>
    </>
    )
  }
}

export default HomeContainer