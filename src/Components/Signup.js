import React from 'react'
import {connect} from 'react-redux'
import {signUpGallery, startGallerySession} from '../Redux/actions'
import { Button, Form, Input, Modal, TextArea } from 'semantic-ui-react'


class Signup extends React.Component{
    
    state = {
        name:"",
        username: "",
        password: ""
    }

    

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }



    handleSubmit = e => {
        e.preventDefault()
        this.props.signupHandler(this.state)
        
    }

    render(){
        // console.log(this.state)
        return(
            <div className="box">
                <h2>sign up</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="inputBox">
                    <input type="text" placeholder="username" value={this.state.username} onChange={this.handleChange} name="username"/>
                </div>
                <div className="inputBox">
                 <input type="password" placeholder="password" value={this.state.password} onChange={this.handleChange} name="password"/>
                </div>
                <div className="inputBox">
                    <input type="text" placeholder="name" value={this.state.name} onChange={this.handleChange} name="name"/>
                </div>
                <Button>Sign up</Button><br></br>
            </form>
            </div>

        )
    }
}

export default Signup