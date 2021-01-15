import React from 'react'

const Artwork = (props) => {
    return (
        <div class="flex-item">
            <h4>
                {props.artwork.title}
            </h4>
            <img 
            class="index-img"
            src={props.artwork.image_url}
            alt={props.artwork.title}
            />

        </div>
    )
}

export default Artwork