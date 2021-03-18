import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input, Modal, TextArea, Radio, Icon } from 'semantic-ui-react'
import { updateExhibition } from '../Redux/actions.js'

class ExhibitionEdit extends React.Component{

    state = {
        title: this.props.title,
        description: this.props.description,
        open: false,
        published: false
    }

    stringToBoolean = (string) => {
        console.log(string)
        switch(string.toLowerCase().trim()){
            case "true": case "yes": case "1": return true;
            case "false": case "no": case "0": case null: return false;
        }
        console.log(string)
    }
    
    handleChange = (e, { published }) => this.setState((prevState) => ({ published: !prevState.published }))

    changeHandler = (e, data) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        const exhibitionId = this.props.id
        const updateObj = {
            title: this.state.title,
            description: this.state.description,
            published: this.state.published,
        
        }


        this.props.updateExh(exhibitionId, updateObj)
        this.setState({open: false})
        e.target.reset()
    }


    render(){
        
        return(
            <div>
                <Modal onClose={() => this.setState({open: false})} onOpen={() => this.setState({open: true})} open={this.state.open} trigger={<Button color="gray">Edit Exhibition</Button>}>
                    <Modal.Content>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Field control={Input} label="Exhibition Title" type="text" name="title" placeholder={this.props.title} value={this.state.title} onChange={this.changeHandler} />
                            <Form.Field control={TextArea} name="description" label="Description" placeholder={this.props.description} value={this.state.description} onChange={this.changeHandler}/>
                            
                            <Form.Field>
                                <Radio toggle
                                    label='Published'
                                    name='published'
                                    published={true}
                                
                                    checked={this.state.published === true}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                            
                            <Button color="gray">Edit exhibition</Button>
                        </Form>
                    </Modal.Content>
                </Modal>

                {console.log(this.state)}
                
            </div>
        )
    }
}



const mdp = (dispatch) => {
    return {
        updateExh: (exhibitionId, updateObj) => dispatch(updateExhibition(exhibitionId, updateObj))
    }
}

export default connect(null, mdp)(ExhibitionEdit)
