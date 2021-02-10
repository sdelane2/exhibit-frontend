import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {

    state = {
        activeItem: ''
    }


   

    handleItemClick = (e, {name}) => this.setState({activeItem: name})


    render() {
        const {activeItem} = this.state
        return (
            <Menu secondary>
                    <Menu.Item name='icon'>
                    <h2>exhibit</h2>
                    </Menu.Item>
                    <Menu.Item name='home' active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                    as={NavLink} to='/home'>
                            Home 
                    </Menu.Item>
                    <Menu.Item name='candidates' active={activeItem === 'candidates'} onClick={this.handleItemClick} as={NavLink} to='/candidates'>
                            Candidates
                    </Menu.Item>
                    <Menu.Item name='clients' active={activeItem === 'clients'} onClick={this.handleItemClick} as={NavLink} to='/clients'>
                            Clients
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} as={NavLink} to='/login'>
                                Login
                        </Menu.Item>
                        <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} as={NavLink} to='/signup'>
                                Sign Up
                        </Menu.Item>
                        
                    </Menu.Item>
            </Menu>
        )
    }
}

