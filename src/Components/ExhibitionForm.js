import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input, Modal, TextArea, Radio, Icon } from 'semantic-ui-react'
import { createExhibition } from '../Redux/actions.js'



class ExhibitionForm extends React.Component{

    state = {
        title: '',
        description: '',
        open: false,
        published: false
    }


    

    changeHandler = (e, data) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleChange = (e, { published }) => this.setState((prevState) => ({ published: !prevState.published }))

    stringToBoolean = (string) => {
        console.log(string)
        switch(string.toLowerCase().trim()){
            case "true": case "yes": case "1": return true;
            case "false": case "no": case "0": case null: return false;
        }
        console.log(string)
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
        e.target.reset()
    }


    render(){

        return(
            <div>
                <Modal onClose={() => this.setState({open: false})} onOpen={() => this.setState({open: true})} open={this.state.open} trigger={<Button color="gray">Create an Exhibition</Button>}>
                    <Modal.Content>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Field control={Input} label="Exhibition Title" type="text" name="title" value={this.state.title} onChange={this.changeHandler} />
                            <Form.Field control={TextArea} name="description" label="Description" value={this.state.description} onChange={this.changeHandler}/>
                            
                            <Form.Field>
                                <Radio
                                    toggle
                                    label='Publish'
                                    name='published'
                                    published={true}
                                    checked={this.state.published === true}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                            
                            <Button color="gray">Create exhibition</Button>
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
