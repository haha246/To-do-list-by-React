import React, { Component, } from "react";
import Header, {X} from "../components/Header";
import Section from "../components/section"
import Footer, {status} from "../components/footer"
import x from '../img/x.png' 


var isComTrue1 = {
	background: "linear-gradient(to right, #00FD6B, #23EDFF)",
	display: "none",
}
var isComTrue2 = {
	background: "linear-gradient(to right, #00FD6B, #23EDFF)",
	display: "",
}
var isComFals1 = {
	background: "#FFF",
	display: "",
}
var isComFals2 = {
	background: "#FFF",
	display: "none",
}
 


class TodoApp extends Component {
	
	
	constructor(props){
		super(props);
		this.state = {
			list: [],
			isCom: [],
		}
		this.onclick = this.onclick.bind(this)
		this.Xon = this.Xon.bind(this)
		
	}
	
	keyup = (e) =>{
		if (e.target.value !== "" && e.keyCode === 13){
			
			var newItems = [e.target.value, ...this.state.list]
			var newCom = [...this.state.isCom, false]
			
			this.setState({
				list: newItems,
				isCom: newCom,
			}
			)
			e.target.value = '';
			
	}
	}
	
	
	onclick(e){
		var index = e.target.getAttribute("id");
		var li = document.getElementById('l' + (index))
		var h1 = document.getElementById('h' + (index))

		var save = this.state.isCom
		
		if (this.state.isCom[index] === false){
			save[index] = true;
			this.setState({isCom: save})
			
			li.style.background = isComTrue1.background
			h1.style.textDecoration = "line-through"
			
		}
		
		else{
			save[index] = false;
			this.setState({isCom: save})
			
			li.style.background = isComFals1.background
			h1.style.textDecoration = "None"
		
		}
	}

    Xon(e){
		
		let index = e.target.getAttribute("id")
		let ind = index.split("x")[1]
		let save = this.state.isCom
		save[ind] = 'apple';
		this.setState({isCom: save})
		
		
		document.getElementById("l" + ind).style.display = "None"
		
	}


	
    render() {
		
		var style = {display:"none"}
		if (this.state.list.length !== 0)  style = {display:""}
		
        return (
            <>
                <Header text="todos" />
			
			    <section className = "todo-app__main">
			        <Section  handlekeyup = {this.keyup} />
			        <ul className = "todo-app__list" id = "todo-app__list" style = {style}>
			
	    {
			this.state.list.map((value, index) => {
			var id = this.state.list.length - 1
			
			if(this.state.isCom[id - index] === true)
		{return(
			
			<li className = "todo-app__item" id = {'l' + (id - index)} key = {id - index} style = {status === 1? isComTrue1: isComTrue2} >
			    <div className = "todo-app__checkbox">
			        <input type = "checkbox" id = {id - index} onClick = {this.onclick}/>
			        <label htmlFor = {id - index}/>
			    </div>
			    <h1 className = "todo-app__item-detail" id = {'h' + (id - index)} ><del> {value} </del></h1>
			    <img src = {x} className = "todo-app__item-x" id = {'x' + (id - index)} alt = '' onClick = {this.Xon}/>
			</li>
			
		)}
		
		else if(this.state.isCom[id - index] === false){
			return(
			
			<li className = "todo-app__item" id = {'l' + (id - index)} key = {id - index} style = {status === 2?isComFals2: isComFals1}>
			    <div className = "todo-app__checkbox">
			        <input type = "checkbox" id = {id - index} onClick = {this.onclick}/>
			        <label htmlFor = {id - index}/>
			    </div>
			    <h1 className = "todo-app__item-detail" id = {'h' + (id - index)}> {value} </h1>
			    <img src = {x} className = "todo-app__item-x" id = {'x' + (id - index)} alt = '' onClick = {this.Xon}/>
			</li>
			
		)
		}
		})
			
			}

			        </ul>
			    </section>
			
			    <footer className="todo-app__footer" id="todo-footer">
				
			        <Footer num = {(this.state.isCom.filter((item) =>{
					return item === false})).length} isCom = {this.state.isCom} list = {this.state.list}/>

			    </footer>
			
            </>
        );
    }
}




export default TodoApp;