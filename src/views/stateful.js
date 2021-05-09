import React, { Component } from 'react'

class Stateful extends Component {
//mounting,
componentWillMount(){
    console.log('componentWillMount');
    sessionStorage.setItem('ram','fdsfsf')
}
componentDidMount(){
    console.log('componentDidMount')
}
//updating,
shouldComponentUpdate(propsValue, stateValue){        
    if(stateValue.userName.substr(0,stateValue.userName.length -1) == this.state.userName){
        return false;
    }else{
        return true;
    }
}

//unmounting
componentWillUnmount(){
    console.log('componentWillUnmount');
    sessionStorage.removeItem('ram')    
}

state = {
    userName:"Ram",
    age:7
}

updteUserState = (data) => {
    this.setState({userName:data});
}

updteAgeState = (data) => {
    this.setState({age:data});
}


    render() {
        console.log('render')
        return (
            <div>
                <input type="text" 
                    name="userName" 
                    onChange={(event) => this.updteUserState(event.target.value)} 
                    value={this.state.userName} />
                    <input type="text" 
                    name="userAge" 
                    onChange={(event) => this.updteAgeState(event.target.value)} 
                    value={this.state.userAge} />
                <div>{this.state.userAge}</div>
            </div>
        )
    }
}
export default Stateful
