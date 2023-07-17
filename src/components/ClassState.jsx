import React, { Component } from 'react';
class Header extends Component {
    constructor()
    {
        super()
        this.state = {
            firstName : 'john',
            email : 'john@gmail.com'
        }
    }

    onClickHandler = () => {   //here we cannot use regular function in class based component (events)
        console.log('clicked')
        
        this.setState({
        firstName : 'sony',
        email : 'sony@gmail.com' // if we doesnot give email in setstate it will displays the john@gmail.com here in classState, in the case
       // of funtionState it will not dispalys email at all, it displays only sony
         })
    }
    
    render(){
        return(
            <div>
                {/* <h1>Welcome Guest</h1>
                <button>Login</button> */}

                <h1>Welcome { this.state.firstName}, {this.state.email }</h1>
                <button onClick = { this.onClickHandler }> Login </button>

            </div>
        )
    }
}
 
export default Header;