import { render } from '@testing-library/react';
import React from 'react'
import ExhibitionThumbnail from '../Components/ExhibitionThumbnail.js'

class ExhibitionContainer extends React.Component {

    state = {
        exhibitions: []
    }

    thumbnailClickHandler = () => {

    }

    componentDidMount(){
        fetch("http://localhost:3000/exhibitions")
        .then(r => r.json())
        .then(data => {
          this.setState({exhibitions: data})
          console.log(this.state)
        })
    
    }
    render() {
        return(
            <div className="flex-container" id="artwork-container">
            {this.state.exhibitions.map(exhibition => <ExhibitionThumbnail exhibition={exhibition} container={true} key={exhibition.id} />)}
            </div>
        )
    }
}

export default ExhibitionContainer