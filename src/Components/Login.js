import React from 'react'
import { Button, Form, Input, Modal, TextArea } from 'semantic-ui-react'


class Login extends React.Component{
    
    state = {
        username: "",
        password: ""
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }




    handleSubmit = e => {
        e.preventDefault()
        this.props.loginHandler(this.state)
        // this.props.startSession()
        console.log(this.props)
    }

    render(){
        // console.log(this.state)
        return(
        
            <div className='box'>
                <h2>sign in</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="inputBox">
                        <input type="text" placeholder="username" value={this.state.username} onChange={this.handleChange} name="username"/>
                    </div>
                    <div className="inputBox">
                        <input type="password" placeholder="password" value={this.state.password} onChange={this.handleChange} name="password"/>
                    </div>
                    <Button>Sign in</Button><br></br>
                </form>
            </div>
    

        )
    }
}

export default Login