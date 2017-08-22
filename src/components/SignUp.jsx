import React, { Component } from 'react';

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
  
 }
 
 
 render(){
     return(
            <div className="form-inline">
             <h1>Sign Up Page</h1>
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
               className="btn btn-successful"
               onClick={() => this.signUp()}
             > Sign Up</button>
            </div>
            
            </div>
         );
     
 }   
    
}

export default SignUp;