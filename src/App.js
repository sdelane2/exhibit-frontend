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
import UserLoginPage from './Pages/UserLoginPage.js'
import GalleryLoginPage from './Pages/GalleryLoginPage.js'
import {loginGallery, signUpGallery, startGallerySession, startUserSession, loginUser, signUpUser} from './Redux/actions'



class App extends React.Component {

  componentDidMount(){
    
  }

  gallerySignupHandler = (galleryObj) => {
    this.props.signupGallery(galleryObj)
    this.props.history.push('/profile')
  }

  galleryLoginHandler = (galleryInfo) => {
    this.props.loginGallery(galleryInfo)
    this.props.history.push('/profile')
  }

  userSignupHandler = (userObj) => {
    this.props.signupUser(userObj)
    this.props.history.push('/explore')

    
  }
  
  userLoginHandler = (userInfo)=>{
    this.props.loginUser(userInfo)
    this.props.history.push('/explore')
    console.log(this.props.user)

    
  }



  render() {
    return(
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/profile' exact render={() => <GalleryContainer gallery={this.props.gallery}/>}/>
          <Route path="/" exact render={() => <HomeContainer />} />
          <Route path='/explore' exact render={() => <ExhibitionContainer user={this.props.user}/>}/>
          <Route path='/user/login' exact render={() => <UserLoginPage userSignupHandler={this.userSignupHandler} userLoginHandler={this.userLoginHandler} setUser={this.props.setUser} user={this.props.user}
          />} />
          <Route path='/gallery/login' exact render={() => <GalleryLoginPage gallerySignupHandler={this.gallerySignupHandler} galleryLoginHandler={this.galleryLoginHandler} setGallery={this.props.setGallery}
          />} />
          
          <Route
          exact
          path={'/exhibitions/:id'}
          component={routerProps => <ExhibitionShow {...routerProps} user={this.props.user} />
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
    gallery: state.gallery,
    user: state.user
  }
}

const mdp = dispatch => {
  return {
    loginGallery: (galleryInfo) => dispatch(loginGallery(galleryInfo)),
    signupGallery: (galleryObj) => dispatch(signUpGallery(galleryObj)),
    setGallery: () => dispatch(startGallerySession()),
    loginUser: (userInfo) => dispatch(loginUser(userInfo)),
    signupUser: (userObj) => dispatch(signUpUser(userObj)),
    setUser: () => dispatch(startUserSession())
  }
}

export default connect(msp, mdp)(withRouter(App));
