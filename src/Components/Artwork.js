import React from 'react'

const Artwork = (props) => {
    return (
        <>
        {props.container ?
        <div className="flex-item">
            <h4>
                {console.log(props.artwork.artwork.title)}
                {props.artwork.artwork.title}
            </h4>
            <img 
            className="index-img"
            src={props.artwork.artwork.image_url}
            alt={props.artwork.title}
            />

        </div>
        :
        <div className="flex-item">
            <h4>
                {console.log(props.artwork)}
                {props.artwork.title}
            </h4>
            <img 
            className="index-img"
            src={props.artwork.image_url}
            alt={props.artwork.title}
            /><br></br>
            <button>delete this artwork</button>

        </div>
        }
        </>
    )
}

export default Artwork