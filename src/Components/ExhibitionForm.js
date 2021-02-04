import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input, Modal, TextArea, Radio } from 'semantic-ui-react'
import { createExhibition } from '../Redux/actions.js'

class ExhibitionForm extends React.Component{

    state = {
        title: '',
        description: '',
        open: false,
        published: ""
    }

    

    changeHandler = (e, data) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        const newExhibition = {
            title: this.state.title,
            description: this.state.description,
            published: this.state.published,
            gallery_id: this.props.gallery.id
        }

        this.props.createNewExhibition(newExhibition)
        this.setState({open: false})
    }


    render(){
        return(
            <div>
                <Modal onClose={() => this.setState({open: false})} onOpen={() => this.setState({open: true})} open={this.state.open} trigger={<Button color="gray">create an exhibition</Button>}>
                    <Modal.Content>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Field control={Input} label="Exhibition Title" type="text" name="title" value={this.state.title} onChange={this.changeHandler} />
                            <Form.Field control={TextArea} name="description" label="Description" value={this.state.description} onChange={this.changeHandler}/>
                            <Form.Group inline>
                            <label>Publish:</label>
                            <Form.Field
                                control={Radio}
                                label='Yes'
                                published={"yes"}
                                checked={this.state.published === "yes" }
                                onChange={this.changeHandler}
                            />
                            <Form.Field
                                control={Radio}
                                label='No'
                                published={"no"}
                                checked={this.state.published === "no"}
                                onChange={this.changeHandler}
                                
                            />
                            </Form.Group>
                            <Button color="gray">Create Exhibition</Button>
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
        createNewExhibition: (exhibitionObj) => dispatch(createExhibition(exhibitionObj))
    }
}

export default connect(msp, mdp)(ExhibitionForm)
