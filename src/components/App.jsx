import React, { Component } from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp'


class App extends Component {
    
    
    render(){
        return(
            <div>
                <div>App from component</div>
                <div> <SignIn /> </div>
                <div> <SignUp/> </div>
            </div>
            
          
        
            
        
            
            );
        
        
    }
    
    
    
}



export default App;