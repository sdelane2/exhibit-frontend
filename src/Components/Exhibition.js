import React from 'react'

const Exhibition = (props) => {
    return (
        <div class="flex-item">
            <h4>
                {props.exhibition.title}
            </h4>
            <img 
            class="index-img"
            src={props.exhibition.image}
            alt={props.exhibition.title}
            
            />
            {console.log(props.exhibition.image)}

        </div>
    )
}

export default Exhibition