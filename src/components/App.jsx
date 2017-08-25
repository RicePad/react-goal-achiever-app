import React, { Component } from 'react';
// import SignIn from '../components/SignIn';
// import SignUp from '../components/SignUp'
import { firebaseApp } from '../firebase'
import { connect } from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';


class App extends Component {
    
    
    signOut(){
        firebaseApp.auth().signOut();
        
    }
    
    render(){
        return(
            <div>
                <div>
                    <h2>Goals</h2>
                    <div><AddGoal /></div>
                    <div><GoalList /></div>
                
                </div>
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