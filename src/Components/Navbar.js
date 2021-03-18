import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import Logout from './Logout'

export default class Navbar extends Component {

    state = {
        activeItem: ''
    }


   

    handleItemClick = (e, {name}) => this.setState({activeItem: name})


    render() {
        const {activeItem} = this.state
        console.log(this.props.user)
        console.log(this.props.gallery)
        return (
            <div className="bg">
            {localStorage.getItem("gallery") ?
            <Menu secondary>
                    <Menu.Item name='icon'>
                    <h2>exhibit</h2>
                    </Menu.Item>
                    <Menu.Item name='/' active={activeItem === '/'}
                    onClick={this.handleItemClick}
                    as={NavLink} to='/'>
                            Home 
                    </Menu.Item>
                    <Menu.Item name='explore' active={activeItem === 'explore'} onClick={this.handleItemClick} as={NavLink} to='/explore'>
                            Exhibitions
                    </Menu.Item>
                    <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} as={NavLink} to='/gallery/profile'>
                            Profile
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} as={NavLink} to='/user/login'>
                                User portal
                        </Menu.Item>
                        <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} as={NavLink} to='/gallery/login'>
                                Gallery portal
                        </Menu.Item>
                        
                        
                    </Menu.Item>
            </Menu>
          :

          <Menu secondary>
                    <Menu.Item name='icon'>
                    <h2>exhibit</h2>
                    </Menu.Item>
                    <Menu.Item name='/' active={activeItem === '/'}
                    onClick={this.handleItemClick}
                    as={NavLink} to='/'>
                            Home 
                    </Menu.Item>
                    <Menu.Item name='explore' active={activeItem === 'explore'} onClick={this.handleItemClick} as={NavLink} to='/explore'>
                            Exhibitions
                    </Menu.Item>
                    <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} as={NavLink} to='/user/profile'>
                            Profile
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} as={NavLink} to='/user/login'>
                                User portal
                        </Menu.Item>
                        <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} as={NavLink} to='/gallery/login'>
                                Gallery portal
                        </Menu.Item>
                        
                        
                    </Menu.Item>
            </Menu>
          
          }
          </div>
        )
    }
}

