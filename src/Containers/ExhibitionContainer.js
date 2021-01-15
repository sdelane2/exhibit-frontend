import { render } from '@testing-library/react';
import React from 'react'
import Exhibition from '../Components/Exhibition.js'

class ExhibitionContainer extends React.Component {

    state = {
        exhibitions: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/exhibitions")
        .then(r => r.json())
        .then(data => {
            console.log(data)
          this.setState({exhibitions: data})
          console.log(this.state)
        })
    
    }
    render() {
        return(
            <div class="flex-container" id="artwork-container">
            {this.state.exhibitions.map(exhibition => <Exhibition exhibition={exhibition} />)}
            </div>
        )
    }
}

export default ExhibitionContainer