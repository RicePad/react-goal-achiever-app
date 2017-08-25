import React, { Component } from 'react';
// import SignIn from '../components/SignIn';
// import SignUp from '../components/SignUp'
import { firebaseApp } from '../firebase'
import { connect } from 'react-redux';


class App extends Component {
    
    
    signOut(){
        firebaseApp.auth().signOut();
        
    }
    
    render(){
        return(
            <div>
                <div>App from component</div>
                <button
                 className="btn btn-danger"
                 onClick={() => this.signOut()}
                >
                    Sign Out
                </button>
                    
            </div>
            
          
        
            
        
            
            );
        
        
    }
    
    
    
}

function mapStateToProps(state){
    console.log('state', state);
    return {};
}


export default connect(mapStateToProps, null)(App);