import React from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'
import whiteread from '../assets/images/whiteread-crop.jpeg'

function LoginPage(props) {


   
   

    return(
        <div>
            <div className='login-container f jcc w'>
                <div className="login-image-half">
                   <img className="w h f"src={whiteread}></img>
                </div>
                <div className="login-form-half f">
                    <div className="login-form-info ma w tac">
                        <div className="login-user f">
                            <h1 className="mb025">Log In</h1>
                            <form className="m0">
                                <div className="login-email w mb05">
                                    <input className="input-field w" type="username" placeholder="Username" required>
                                    </input>
                                </div>
                                <div className="login-password w mb05">
                                    <input className="input-field w" type="password" placeholder="Password" required>
                                    </input>
                                </div>
                                <div className="login-button jcc tac">
                                    <input className=" login-btn w caps ls bold" type="submit" value="Log In">
                                    </input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        
    )
  }

export default LoginPage