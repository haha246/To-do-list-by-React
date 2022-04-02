import React from 'react';


var status = 0

var A = (props) => {
	
	
	var allclick = function(){
		status = 0
		for(let i = 0; i < props.list.length ; i++){
			if(props.isCom[i] !== 'apple'){
			var li = document.getElementById('l' + (i))
			li.style.display = ""
			}
		}
	}
	
	var actclick = function(){
		status = 1
		for(let i = 0; i < props.list.length ; i++){
			var li = document.getElementById('l' + (i))
			if(props.isCom[i] === false){
			    li.style.display = ""
			}
			else if(props.isCom[i] === true){
				li.style.display = "none"
			}
		}
	}
	
	var comclick = function(){
		status = 2
		for(let i = 0; i < props.list.length ; i++){
			var li = document.getElementById('l' + (i))
			if(props.isCom[i] === true){
			    li.style.display = ""
			}
			else if(props.isCom[i] === false){
				li.style.display = "none"
			}
			
		}
	}
	
	var clearclick = function(){
		for(let i = props.list.length - 1; i >= 0; i--){
			if(props.isCom[i] === true){
				
				document.getElementById('l' + (i)).style.display = "None";
				
				props.isCom[i] = "apple"
			}
			
		}
		
	}
	
	return(
		<>
		
		    <div className="todo-app__total" id="total">{props.num} left</div>
				
		    <ul className="todo-app__view-buttons">
		        <button id="all" onClick = {allclick}>All</button>
			    <button id="active" onClick = {actclick}>Active</button>
			    <button id="completed" onClick = {comclick}>Completed</button>
		    </ul>
				
		    <div className="todo-app__clean"><button id="clear" onClick = {clearclick}>Clear completed</button></div>
		
		</>
	);
}

export default A;
export {status};