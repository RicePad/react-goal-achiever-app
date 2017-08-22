import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
 constructor(props){
  super(props);
  
  this.state = {
    email: '',
    password: ''
   
  };
  
 }
 
 signUp(){
  console.log('this.state', this.state);
  firebaseApp.auth().createUserWithEmailAndPassword();
  
  
 }
 
 
 render(){
     return(
            <div className="form-inline">
             <h2>Sign Up Page</h2>
            <div className="form-group">
                 <input
                 className="form-control"
                 type="text"
                 placeholder="enter email"
                 onChange={(event) => this.setState({email: event.target.value})}
                 />
                <input
                 className="form-control"
                 type="password"
                 placeholder="enter password"
                 onChange={(event) => this.setState({password: event.target.value})}
                 />
              <button
               className="btn btn-primary"
               onClick={() => this.signUp()}
             > Sign Up</button>
            </div>
            
            </div>
         );
     
 }   
    
}

export default SignUp;