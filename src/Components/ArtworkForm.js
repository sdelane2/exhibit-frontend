import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input, Modal, TextArea } from 'semantic-ui-react'
import { createArtwork } from '../Redux/actions.js'

class ArtworkForm extends React.Component{

    state = {
        artist: '',
        title: '',
        date: '',
        medium: '',
        description: '',
        image_url: '',
        open: false,
    }

    

    changeHandler = (e, data) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        
        const newArtwork = {
            artist: this.state.artist,
            title: this.state.title,
            date: this.state.date, 
            medium: this.state.medium,
            description: this.state.description,
            image_url: this.state.image_url,
            gallery_id: this.props.gallery.id
        }

        this.props.createNewArtwork(newArtwork)
        this.setState({open: false})
        e.target.reset()
    }


    render(){
        return(
            <div>
                <Modal onClose={() => this.setState({open: false})} onOpen={() => this.setState({open: true})} open={this.state.open} trigger={<Button color="gray">Add New Artwork</Button>}>
                    <Modal.Content>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Field control={Input} label="Artist" type="text" name="artist" value={this.state.artist} onChange={this.changeHandler} />
                            <Form.Field control={Input} label="Title" type="text" name="title" value={this.state.title} onChange={this.changeHandler} />
                            <Form.Field control={Input} label="Year" type="text" name="date" value={this.state.date} onChange={this.changeHandler} />
                            <Form.Field control={Input} label="Medium" type="text" name="medium" value={this.state.medium} onChange={this.changeHandler} />
                            <Form.Field control={Input} label="Image" type="text" name="image_url" value={this.state.image_url} onChange={this.changeHandler} />
                            <Form.Field control={TextArea} name="description" label="Description" value={this.state.description} onChange={this.changeHandler}/>
                            <Button color="gray">Add Artwork</Button>
                        </Form>
                    </Modal.Content>
                </Modal>

                {console.log(this.state)}
                
            </div>
        )
    }
}

const msp = state => {
    return {
    gallery: state.gallery,
    }
}

const mdp = (dispatch) => {
    return {
        createNewArtwork: (artworkObj) => dispatch(createArtwork(artworkObj))
    }
}

export default connect(msp, mdp)(ArtworkForm)
