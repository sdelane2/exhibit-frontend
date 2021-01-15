import logo from './logo.svg';
import './App.css';
import React from 'react'
import ArtworkContainer from './Containers/ArtworkContainer'
import HomeContainer from './Containers/HomeContainer'
import {Route, Switch} from 'react-router-dom'
import ExhibitionContainer from './Containers/ExhibitionContainer'


class App extends React.Component {



  render() {
    return(
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <HomeContainer />
          </Route>
          <Route path='/explore' component={ExhibitionContainer}/>
        </Switch>
    </div>
    )
  }

}

export default App
