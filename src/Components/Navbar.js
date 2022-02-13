import React, { Component } from 'react'
import { Link } from 'react-router-dom'


function Navbar(props) {

        // state = {
        //         activeItem: ''
        // }
        
        // handleItemClick = (e, {name}) => this.setState({activeItem: name})

        

        return(
                <header>
                        <div className="navbar">
                                <div className="navbar-left">
                                        <h2 className="navbar-link"><Link style={{color: 'black'}} to='/explore'>exhibitions</Link></h2>
                                        <h2 className="navbar-link"><Link style={{color: 'black'}} to='/explore'>artworks</Link></h2>
                                
                                </div>
                                <div className="center">
                                        <h1>exhibit</h1>
                                </div>
                                <div className="navbar-right">
                                        <h2 className="navbar-link"><Link style={{color: 'black'}} to='/user/login'>login</Link></h2>
                                        <h2 className="navbar-link"><Link style={{color: 'black'}} to='/user/login'>signup</Link></h2>
                                </div>
                        
                        </div>

                </header>
                
        )
}

export default Navbar



// export default class Navbar extends Component {




//     render() {
//         const {activeItem} = this.state
//         console.log(this.props.user)
//         console.log(this.props.gallery)
//         return (
//             <div className="bg">
//             {localStorage.getItem("gallery") ?
//             <Menu secondary>
//                     <Menu.Item name='icon'>
//                     <h2>exhibit</h2>
//                     </Menu.Item>
//                     <Menu.Item name='/' active={activeItem === '/'}
//                     onClick={this.handleItemClick}
//                     as={NavLink} to='/'>
//                             Home 
//                     </Menu.Item>
//                     <Menu.Item name='explore' active={activeItem === 'explore'} onClick={this.handleItemClick} as={NavLink} to='/explore'>
//                             Exhibitions
//                     </Menu.Item>
//                     <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} as={NavLink} to='/gallery/profile'>
//                             Profile
//                     </Menu.Item>
//                     <Menu.Item position='right'>
//                         <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} as={NavLink} to='/user/login'>
//                                 User portal
//                         </Menu.Item>
//                         <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} as={NavLink} to='/gallery/login'>
//                                 Gallery portal
//                         </Menu.Item>
                        
                        
//                     </Menu.Item>
//             </Menu>
//           :

//           <Menu secondary>
//                     <Menu.Item name='icon'>
//                     <h2>exhibit</h2>
//                     </Menu.Item>
//                     <Menu.Item name='/' active={activeItem === '/'}
//                     onClick={this.handleItemClick}
//                     as={NavLink} to='/'>
//                             Home 
//                     </Menu.Item>
//                     <Menu.Item name='explore' active={activeItem === 'explore'} onClick={this.handleItemClick} as={NavLink} to='/explore'>
//                             Exhibitions
//                     </Menu.Item>
//                     <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} as={NavLink} to='/user/profile'>
//                             Profile
//                     </Menu.Item>
//                     <Menu.Item position='right'>
//                         <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} as={NavLink} to='/user/login'>
//                                 User portal
//                         </Menu.Item>
//                         <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} as={NavLink} to='/gallery/login'>
//                                 Gallery portal
//                         </Menu.Item>
                        
                        
//                     </Menu.Item>
//             </Menu>
          
//           }
//           </div>
//         )
//     }
// }

