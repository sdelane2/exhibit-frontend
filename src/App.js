import './App.css';
import "./fonts/Heebo-Light.ttf";
import React from 'react'
import ArtworkContainer from './Containers/ArtworkContainer'
import HomeContainer from './Containers/HomeContainer'
import {Route, Switch, withRouter} from 'react-router-dom'
import ExhibitionContainer from './Containers/ExhibitionContainer'
import GalleryContainer from './Containers/GalleryContainer.js'
import ExhibitionShow from './Pages/ExhibitionShow'
import ExhibitionEdit from './Pages/ExhibitionEdit'
import Navbar from './Components/Navbar'
import {connect} from 'react-redux'
import Signup from './Components/Signup.js'
import {loginGallery, signUpGallery, startGallerySession} from './Redux/actions'



class App extends React.Component {

  componentDidMount(){
    const token = localStorage.getItem('token')
    if (token){
      this.props.setGallery()
    }
    else {
      this.props.history.push('/')
    }
  }

  signupHandler = (galleryObj) => {
    this.props.signup(galleryObj)
    
  }
  
  loginHandler = (galleryInfo)=>{
    this.props.login(galleryInfo)
    this.props.history.push('/profile')
    console.log(this.props.gallery)

    
  }



  render() {
    return(
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/profile' component={GalleryContainer} gallery={this.props.gallery}/>
          <Route path="/" exact render={() => <HomeContainer signupHandler={this.signupHandler} loginHandler={this.loginHandler}/>} />
          <Route path='/explore' component={ExhibitionContainer}/>
          
          <Route
          exact
          path={'/exhibitions/:id'}
          component={routerProps => <ExhibitionShow {...routerProps} />
        }
        />
        <Route
          exact
          path={'/exhibitions/edit/:id'}
          component={routerProps => <ExhibitionEdit {...routerProps} />
        }
        />
        </Switch>
    </div>
    )
  }

}

const msp = state => {
  return {
    gallery: state.gallery
  }
}

const mdp = dispatch => {
  return {
    login: (galleryInfo) => dispatch(loginGallery(galleryInfo)),
    signup: (galleryObj) => dispatch(signUpGallery(galleryObj)),
    setGallery: () => dispatch(startGallerySession())
  }
}

export default connect(msp, mdp)(withRouter(App));
