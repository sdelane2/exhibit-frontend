import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { logOutUser } from '../Redux/actions'


class Logout extends Component {

handleClick = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    this.props.logOutUser()

}
render() {
    return (
        <div>
            <Button secondary onClick={this.handleClick}>Log Out</Button>
        </div>
    )
}
}

const mdp = (dispatch) => {
return {
    logOutUser: () => dispatch(logOutUser())
}
}

export default connect(null, mdp)(Logout);