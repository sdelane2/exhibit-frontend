import React from 'react'
import { Link } from 'react-router-dom'

function ExhibitionObject(props) {

   const exhibitionLink = (element) => 
        <Link style={{color: 'black'}} to={{ pathname: `/exhibitions/${props.exhibition.id}`, 
            state: {
                    title: props.exhibition.title,
                    description: props.exhibition.description
                    } 
                }}>
            {element}
        </Link>
   

    return(
        <div className="exhibition-parent"> 
            <div className="title-card">
                {exhibitionLink(<h2>{props.exhibition.title}</h2>)}
            </div>
            <div className="exhibition-card">
                {exhibitionLink(<img src={props.image} className='index-img'></img>)}
            </div>
        </div>
    )
  }

export default ExhibitionObject