import React, {Component} from "react";

class Input extends Component{
	
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<input className="todo-app__input" placeholder="What needs to be done?" onKeyUp={this.props.handlekeyup}/>
		)
	}
	
}

export default Input;
