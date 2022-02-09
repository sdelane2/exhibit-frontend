import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Card, Image, Form, Radio} from "semantic-ui-react"
import LazyLoad from 'react-lazyload';



class exhibitionThumbnail extends React.Component {
    deleteClickHandler = () => {
        this.props.deleteExhibition(this.props.exhibition.id)
    }
    favoriteClickHandler = () => {
        const newFavorite = {
            exhibition_id: this.props.exhibition.id,
            user_id: this.props.user.id
        }
        this.props.addFavoriteExhibition(newFavorite)
    }
    deleteFaveClickHandler = () => {
        let fave = [...this.props.faves].find(fave => fave.exhibition_id === this.props.exhibition.id)
        this.props.deleteFave(fave.id)
    }
    publishClickHandler = () => {
        const exhibitionId = this.props.exhibition.id
        const updateObj = {
            published: true        
        }
        this.props.updateExh(exhibitionId, updateObj)
    }
    unpublishClickHandler = () => {
        const exhibitionId = this.props.exhibition.id
        const updateObj = {
            published: false 
        }
        this.props.updateExh(exhibitionId, updateObj)
    }
    render(){
        console.log(this.props.faves)
        const extra = (
            <img 
                className="index-img"
                src={this.props.image}
                alt={this.props.exhibition.title}
                
            />
          )
    return (
        <>
        {this.props.container ?
            [...this.props.faves].find(fave => fave.exhibition_id === this.props.exhibition.id) ?
            <div>
            <Card color="grey" raised>
        
        <Card.Content>
            <Link to={{ pathname: `/exhibitions/${this.props.exhibition.id}`, 
                state: {
                    title: this.props.exhibition.title,
                    description: this.props.exhibition.description
                } }}>
            <Image
            className="index-img"
            src={this.props.image}
            
            />
            </Link>
            
            <Card.Header><br></br>{this.props.exhibition.title}</Card.Header>
        </Card.Content>
        <Card.Content extra>
            <Button negative onClick={this.deleteFaveClickHandler}>
            Remove Favorite Exhibition
            </Button>
        </Card.Content>   
        </Card>
        <div id="spacer-exhibitions">
            
        </div>
        </div>
            :
            <div>
            <Card color="grey" raised>
            
            <Card.Content>
                <Link to={{ pathname: `/exhibitions/${this.props.exhibition.id}`, 
                state: {
                    title: this.props.exhibition.title,
                    description: this.props.exhibition.description,
                    published: this.props.exhibition.published
                } }}>
                <Image
                className="index-img"
                src={this.props.image}
                
                />
                </Link>
                
                <Card.Header><br></br>{this.props.exhibition.title}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Button color="grey" onClick={this.favoriteClickHandler}>
                Favorite Exhibition
                </Button>
            </Card.Content>   
            </Card>
            <div id="spacer-exhibitions">
            
            </div>
            </div>
            
        
        :
        <>
        {console.log(this.props.exhibitions)}
        {this.props.published === true ?
        <div>
            
            <Card color="grey" raised>
            <Card.Content>
                <Image
                className="index-img"
                src={this.props.image}
                
                />
                
                <Card.Header><br></br>{this.props.exhibition.title}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Button onClick={this.deleteClickHandler}style={{width: "178px"}}>
                Delete this exhibition
                
                </Button>
                <Link to={{ pathname: `/exhibitions/edit/${this.props.exhibition.id}`,
                state: {
                    title: this.props.exhibition.title,
                    description: this.props.exhibition.description
                } }}>
                <Button style={{width: "178px"}}>
                Edit this Exhibition
                </Button>
                </Link>
                <Button negative onClick={this.unpublishClickHandler}>
                    Unpublish Exhibition
                </Button>
                           
            </Card.Content>   
        </Card>
        <div id="spacer-exhibitions">
            
        </div>
        
        </div>
        :
        <div>
            
            <Card color="grey" raised>
            <Card.Content>
                <Image
                className="index-img"
                src={this.props.image}
                
                />
                
                <Card.Header><br></br>{this.props.exhibition.title}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Button onClick={this.deleteClickHandler}style={{width: "178px"}}>
                Delete this exhibition
                </Button>
                <Link to={{ pathname: `/exhibitions/edit/${this.props.exhibition.id}`,
                state: {
                    title: this.props.exhibition.title,
                    description: this.props.exhibition.description
                } }}>
                <Button style={{width: "178px"}}>
                Edit this Exhibition
                </Button>
                </Link>
                <Button onClick={this.publishClickHandler}>
                    Publish Exhibition
                </Button>
                           
            </Card.Content>   
        </Card>
        <div id="spacer-exhibitions">
            
        </div>
        
        </div>

        }
        {/* <div className="flex-item">
            <h3>
                {console.log(this.props)}
                {this.props.exhibition.title}
            </h3>
            <Link to={{ pathname: `/exhibitions/edit/${this.props.exhibition.id}` }}>
            <img 
            className="index-img"
            src={this.props.image}
            alt={this.props.exhibition.title}
            />
            </Link>
            <br></br>
            <button onClick={this.deleteClickHandler}>delete this exhibition</button>
            {console.log(this.props.image)}
            
            </div> */}
        </>
        }
        </>
    )
    }
}

export default exhibitionThumbnail