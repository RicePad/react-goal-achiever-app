import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';
import { setGoals } from '../actions'

class GoalList extends Component{
    
    componentDidMount(){
        goalRef.on('value', snap =>{
           let goals = [];
           snap.forEach(goal => {
               const {email, title} = goal.val();
               goals.push(email, title);
               
           });
           console.log('goals', goals);
           this.props.setGoals(goals);
        });
        
    }
    render(){
        return(
            <div> 
            {
                this.props.goals.map((goal, index) => {
                    return(
                        <div key={index}>{goal.title}</div>
                    ) 
                })
            }
            </div>
            );
        
    }
    
    
}


function mapStateToProps(state) {
  const { goals } = state;
  return {
    goals
  };
}


export default connect(mapStateToProps, { setGoals })(GoalList);
