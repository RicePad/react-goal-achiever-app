import React, { Component } from 'react';
import { firebaseApp } from '../firebase'


class SignIn extends Component{
    constructor(props){
        super(props);
        
        this.state={
            email: '',
            password: ''
            
        };
        
    }
    
    
    signIn(){
        console.log('this.state', this.state);

    }
    
    render(){
        return(
            <div className="form-inline"> 
                <h2>Sign In Page </h2>
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    placeholder="enter email"
                    onChange={(event) => this.setState({ email: event.target.value})}
                />
                <input
                    className="form-control"
                    type=" enter password"
                    placeholder="password"
                    onChange={(event) => this.setState({password: event.target.value})}
                />
                <button
                    className="btn btn-primary"
                    onClick={() => this.signIn()}
                >Log In</button>
            </div>
            </div>
            );
        
        
    }
    
    
}


export default SignIn;