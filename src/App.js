import './App.css';
import "./fonts/Heebo-Light.ttf";
import React, {Suspense} from 'react'
import ArtworkContainer from './Containers/ArtworkContainer'
import {Route, Switch, withRouter} from 'react-router-dom'
import ExhibitionShow from './Pages/ExhibitionShow'
import ExhibitionEdit from './Pages/ExhibitionEdit'
import Navbar from './Components/Navbar'
import {connect} from 'react-redux'
import ViewingRoom from './Components/ViewingRoom'
import Signup from './Components/Signup.js'
import UserLoginPage from './Pages/UserLoginPage.js'
import GalleryLoginPage from './Pages/GalleryLoginPage.js'
import {startUserSession, loginUser, signUpUser} from './Redux/actions'
const HomeContainer = React.lazy(() => import('./Containers/HomeContainer'));
const GalleryContainer = React.lazy(() => import('./Containers/GalleryContainer'));
const ExhibitionContainer = React.lazy(() => import('./Containers/ExhibitionContainer'))
const FavoritesContainer = React.lazy(() => import('./Containers/FavoritesContainer'))




class App extends React.Component {

  

  componentDidMount(){
    console.log(localStorage)
    if(localStorage.getItem("user")){
      this.props.setUser()
    } else {
      this.props.history.push("/")
    }
  }

  // gallerySignupHandler = (galleryObj) => {
  //   this.props.signupGallery(galleryObj)
  //   this.props.history.push('/gallery/profile')
  // }

  // galleryLoginHandler = (galleryInfo) => {
  //   this.props.loginGallery(galleryInfo)
  //   this.props.history.push('/gallery/profile')
  // }

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
        <Navbar gallery={this.props.user}/>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/gallery/profile' exact render={() => <GalleryContainer gallery={this.props.user}/>}/>
          <Route path='/user/profile' exact render={() => <FavoritesContainer user={this.props.user}/>}/>
          <Route path="/" exact render={() => <HomeContainer />} />
          <Route path='/explore' exact render={() => <ExhibitionContainer user={this.props.user}/>}/>
          <Route path='/user/login' exact render={() => <UserLoginPage userSignupHandler={this.userSignupHandler} userLoginHandler={this.userLoginHandler} setUser={this.props.setUser} user={this.props.user}
          />} />
          <Route path='/gallery/login' exact render={() => <GalleryLoginPage setGallery={this.props.setUser}
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
        <Route
          exact
          path={'/viewing_room'}
          component={routerProps => <ViewingRoom {...routerProps} />
        }
        />
        </Switch>
      </Suspense>
    </div>
    )
  }

}

const msp = state => {
  return {
    user: state.user
  }
}

const mdp = dispatch => {
  return {
    
    
    loginUser: (userInfo) => dispatch(loginUser(userInfo)),
    signupUser: (userObj) => dispatch(signUpUser(userObj)),
    setUser: () => dispatch(startUserSession())
  }
}

export default connect(msp, mdp)(withRouter(App));
